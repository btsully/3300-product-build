export interface Product {
  id: string;
  name: string;
  category: string;
  unitLabel: string;
  price: number;
  taxable: boolean;
  priorityHint: "staple" | "nice-to-have" | "splurge";
  aisle: string;
}

export interface ListItem extends Omit<Product, 'id'> {
  productId: string;
  quantity: number;
}

export interface TripSettings {
  budget: number;
  taxRate: number;
}

export interface SavedTrip {
  id: string;
  date: string;
  budget: number;
  estimatedTotal: number;
  actualTotal: number;
  variancePercent: number;
  status: 'under' | 'over';
  itemCount: number;
}

export const CATALOG: Product[] = [
  // Produce (Usually tax exempt)
  { id: "p1", name: "Bananas", category: "Produce", unitLabel: "lb", price: 0.59, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p2", name: "Honeycrisp Apples", category: "Produce", unitLabel: "lb", price: 2.49, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p3", name: "Baby Spinach (Bag)", category: "Produce", unitLabel: "ea", price: 3.99, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p4", name: "Avocados", category: "Produce", unitLabel: "ea", price: 1.25, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p5", name: "Roma Tomatoes", category: "Produce", unitLabel: "lb", price: 1.99, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p6", name: "White Onions", category: "Produce", unitLabel: "lb", price: 1.49, taxable: false, priorityHint: "staple", aisle: "Produce" },
  { id: "p7", name: "Russet Potatoes", category: "Produce", unitLabel: "lb", price: 0.99, taxable: false, priorityHint: "staple", aisle: "Produce" },
  
  // Dairy & Eggs (Usually tax exempt)
  { id: "d1", name: "Hy-Vee Large Eggs (Dozen)", category: "Dairy", unitLabel: "ea", price: 2.29, taxable: false, priorityHint: "staple", aisle: "Dairy" },
  { id: "d2", name: "Hy-Vee 2% Milk (Gallon)", category: "Dairy", unitLabel: "ea", price: 3.19, taxable: false, priorityHint: "staple", aisle: "Dairy" },
  { id: "d3", name: "Oatly Oat Milk", category: "Dairy", unitLabel: "ea", price: 4.99, taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d4", name: "Hy-Vee Shredded Cheddar", category: "Dairy", unitLabel: "8oz", price: 2.50, taxable: false, priorityHint: "staple", aisle: "Dairy" },
  { id: "d5", name: "Chobani Greek Yogurt", category: "Dairy", unitLabel: "ea", price: 5.49, taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },

  // Meat & Protein (Usually tax exempt)
  { id: "m1", name: "Hy-Vee Chicken Breasts", category: "Meat", unitLabel: "lb", price: 3.49, taxable: false, priorityHint: "staple", aisle: "Meat" },
  { id: "m2", name: "Ground Beef (80/20)", category: "Meat", unitLabel: "lb", price: 4.99, taxable: false, priorityHint: "staple", aisle: "Meat" },
  { id: "m3", name: "Hy-Vee Thick Cut Bacon", category: "Meat", unitLabel: "16oz", price: 6.99, taxable: false, priorityHint: "nice-to-have", aisle: "Meat" },
  { id: "m4", name: "Tofu (Extra Firm)", category: "Meat", unitLabel: "ea", price: 2.49, taxable: false, priorityHint: "staple", aisle: "Produce/Vegan" },

  // Pantry (Usually tax exempt)
  { id: "pa1", name: "Hy-Vee Sandwich Bread", category: "Pantry", unitLabel: "ea", price: 1.99, taxable: false, priorityHint: "staple", aisle: "Bread" },
  { id: "pa2", name: "Hy-Vee Peanut Butter", category: "Pantry", unitLabel: "ea", price: 2.49, taxable: false, priorityHint: "staple", aisle: "Aisle 3" },
  { id: "pa3", name: "Hy-Vee Pasta (Spaghetti)", category: "Pantry", unitLabel: "16oz", price: 1.29, taxable: false, priorityHint: "staple", aisle: "Aisle 4" },
  { id: "pa4", name: "Hy-Vee Pasta Sauce", category: "Pantry", unitLabel: "24oz", price: 1.89, taxable: false, priorityHint: "staple", aisle: "Aisle 4" },
  { id: "pa5", name: "Black Beans (Canned)", category: "Pantry", unitLabel: "ea", price: 0.89, taxable: false, priorityHint: "staple", aisle: "Aisle 2" },
  { id: "pa6", name: "Jasmine Rice", category: "Pantry", unitLabel: "32oz", price: 3.29, taxable: false, priorityHint: "staple", aisle: "Aisle 2" },
  
  // Frozen (Usually tax exempt, unless prepared hot)
  { id: "f1", name: "Hy-Vee Frozen Pizza", category: "Frozen", unitLabel: "ea", price: 4.99, taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f2", name: "Frozen Mixed Veggies", category: "Frozen", unitLabel: "12oz", price: 1.50, taxable: false, priorityHint: "staple", aisle: "Frozen" },
  { id: "f3", name: "Ben & Jerry's Ice Cream", category: "Frozen", unitLabel: "pt", price: 5.99, taxable: false, priorityHint: "splurge", aisle: "Frozen" },

  // Snacks & Beverages (Often taxable, depending on type, but we'll mark some as taxable for example)
  { id: "s1", name: "Doritos (Nacho Cheese)", category: "Snacks", unitLabel: "ea", price: 4.50, taxable: true, priorityHint: "splurge", aisle: "Aisle 7" },
  { id: "s2", name: "Hy-Vee Tortilla Chips", category: "Snacks", unitLabel: "ea", price: 2.50, taxable: true, priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s3", name: "Coca-Cola (12 Pack)", category: "Beverages", unitLabel: "ea", price: 7.99, taxable: true, priorityHint: "splurge", aisle: "Aisle 8" },
  { id: "s4", name: "LaCroix Sparkling Water", category: "Beverages", unitLabel: "8 Pack", price: 4.50, taxable: true, priorityHint: "nice-to-have", aisle: "Aisle 8" },

  // Household (Always taxable)
  { id: "h1", name: "Hy-Vee Paper Towels", category: "Household", unitLabel: "2 Rolls", price: 3.99, taxable: true, priorityHint: "staple", aisle: "Aisle 10" },
  { id: "h2", name: "Toilet Paper", category: "Household", unitLabel: "4 Rolls", price: 4.99, taxable: true, priorityHint: "staple", aisle: "Aisle 10" },
  { id: "h3", name: "Dawn Dish Soap", category: "Household", unitLabel: "ea", price: 3.49, taxable: true, priorityHint: "staple", aisle: "Aisle 11" },
  { id: "h4", name: "Tide Pods", category: "Household", unitLabel: "ea", price: 12.99, taxable: true, priorityHint: "staple", aisle: "Aisle 11" },
];
