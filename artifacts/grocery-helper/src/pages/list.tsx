import React, { useState } from "react";
import { useGroceryStore } from "@/hooks/use-store";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Trash2, Plus, Minus, AlertTriangle, Receipt, Search } from "lucide-react";
import { Link } from "wouter";

export default function ListPage() {
  const { list, settings, updateQuantity, removeItem, saveTrip } = useGroceryStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [actualTotalStr, setActualTotalStr] = useState("");

  // Calculate totals
  let estimatedSubtotal = 0;
  let estimatedTax = 0;

  list.forEach((item) => {
    const cost = item.price * item.quantity;
    estimatedSubtotal += cost;
    if (item.taxable) {
      estimatedTax += cost * (settings.taxRate / 100);
    }
  });

  const estimatedTotal = estimatedSubtotal + estimatedTax;
  
  // Sort list to show highest total cost items first (good for budget review)
  const sortedList = [...list].sort((a, b) => (b.price * b.quantity) - (a.price * a.quantity));

  const handleCheckout = () => {
    const actual = parseFloat(actualTotalStr);
    if (!isNaN(actual) && actual > 0) {
      saveTrip(actual);
      setIsCheckoutOpen(false);
      // We don't redirect, store will clear list automatically, empty state handles it.
    }
  };

  if (list.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
          <Receipt className="w-10 h-10 text-muted-foreground opacity-50" />
        </div>
        <h2 className="text-2xl font-bold text-foreground font-serif mb-2">Your list is empty</h2>
        <p className="text-muted-foreground max-w-sm mb-8">
          Add items from the search page to start building your budget-conscious grocery run.
        </p>
        <Link href="/search">
          <Button size="lg" className="w-full sm:w-auto">
            <Search className="w-4 h-4 mr-2" />
            Find Items
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-24">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">Grocery List</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and adjust before you shop</p>
      </header>

      <div className="space-y-4">
        {sortedList.map((item, index) => {
          const totalCost = item.price * item.quantity;
          const isHighCost = totalCost > settings.budget * 0.15; // Flags items taking >15% of budget

          return (
            <Card key={item.productId} className={`transition-all ${isHighCost ? 'border-amber-200' : ''}`}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1 pr-4">
                    <h3 className="font-semibold text-foreground leading-tight">{item.name}</h3>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground items-center">
                      <span>${item.price.toFixed(2)} / {item.unitLabel}</span>
                      <span>•</span>
                      <span>{item.category}</span>
                      {item.taxable && (
                        <>
                          <span>•</span>
                          <span className="text-primary font-medium">Taxable</span>
                        </>
                      )}
                    </div>
                    {isHighCost && (
                      <Badge variant="outline" className="mt-2 bg-amber-50 text-amber-800 border-amber-200 text-[10px]">
                        <AlertTriangle className="w-3 h-3 mr-1 inline" /> High Budget Impact
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-lg tracking-tight">${totalCost.toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeItem(item.productId)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  
                  <div className="flex items-center bg-secondary rounded-lg border border-border overflow-hidden">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-none hover:bg-primary/10"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <div className="w-10 text-center font-medium text-sm">
                      {item.quantity}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-none hover:bg-primary/10"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="sticky bottom-20 md:bottom-6 z-10 shadow-xl border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <CardContent className="p-4 md:p-6">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Subtotal: ${estimatedSubtotal.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Est. Tax: ${estimatedTax.toFixed(2)}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Estimated Total</div>
              <div className="text-3xl font-bold tracking-tighter text-primary">${estimatedTotal.toFixed(2)}</div>
            </div>
          </div>
          <Button 
            className="w-full text-lg py-6" 
            size="lg"
            onClick={() => {
              setActualTotalStr(estimatedTotal.toFixed(2));
              setIsCheckoutOpen(true);
            }}
          >
            Log Receipt & Finish
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Final Receipt</DialogTitle>
            <DialogDescription>
              Enter the actual total from your Hy-Vee receipt. We'll save this trip to help you budget better next time.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <Label htmlFor="actualTotal" className="text-sm font-medium mb-2 block">
              Actual Receipt Total ($)
            </Label>
            <Input
              id="actualTotal"
              type="number"
              step="0.01"
              value={actualTotalStr}
              onChange={(e) => setActualTotalStr(e.target.value)}
              className="text-2xl font-bold p-6 h-auto text-center"
              autoFocus
            />
            <p className="text-xs text-muted-foreground text-center mt-3">
              Estimated was ${estimatedTotal.toFixed(2)}
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCheckoutOpen(false)}>Cancel</Button>
            <Button onClick={handleCheckout}>Save Trip History</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
