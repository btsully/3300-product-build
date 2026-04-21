import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, ListItem, TripSettings, SavedTrip } from "@/lib/data";

interface GroceryState {
  settings: TripSettings;
  list: ListItem[];
  history: SavedTrip[];
  setSettings: (settings: Partial<TripSettings>) => void;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearList: () => void;
  saveTrip: (actualTotal: number) => void;
}

export const useGroceryStore = create<GroceryState>()(
  persist(
    (set, get) => ({
      settings: {
        budget: 50,
        taxRate: 6.0, // Iowa City general sales tax approx 6% (grocery food often exempt, we handle per item)
      },
      list: [],
      history: [],

      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      addItem: (product, quantity = 1) =>
        set((state) => {
          const existing = state.list.find((item) => item.productId === product.id);
          if (existing) {
            return {
              list: state.list.map((item) =>
                item.productId === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            list: [...state.list, { ...product, productId: product.id, quantity }],
          };
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          list: state.list
            .map((item) => (item.productId === productId ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0),
        })),

      removeItem: (productId) =>
        set((state) => ({
          list: state.list.filter((item) => item.productId !== productId),
        })),

      clearList: () => set({ list: [] }),

      saveTrip: (actualTotal) => {
        const { list, settings, history } = get();
        
        let estimatedSubtotal = 0;
        let estimatedTax = 0;
        
        list.forEach(item => {
          const cost = item.price * item.quantity;
          estimatedSubtotal += cost;
          if (item.taxable) {
            estimatedTax += cost * (settings.taxRate / 100);
          }
        });
        
        const estimatedTotal = estimatedSubtotal + estimatedTax;
        const variancePercent = estimatedTotal > 0 
          ? ((actualTotal - estimatedTotal) / estimatedTotal) * 100 
          : 0;
          
        const newTrip: SavedTrip = {
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          budget: settings.budget,
          estimatedTotal,
          actualTotal,
          variancePercent,
          status: actualTotal <= settings.budget ? 'under' : 'over',
          itemCount: list.reduce((sum, item) => sum + item.quantity, 0)
        };
        
        set({
          history: [newTrip, ...history],
          list: [] // Clear list after saving
        });
      }
    }),
    {
      name: "grocery-helper-storage",
    }
  )
);
