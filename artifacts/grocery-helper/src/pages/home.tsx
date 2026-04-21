import React, { useState } from "react";
import { useGroceryStore } from "@/hooks/use-store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { AlertCircle, ShoppingCart, Search, TrendingUp, Settings, Receipt } from "lucide-react";

export default function Home() {
  const { settings, setSettings, list } = useGroceryStore();
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [tempBudget, setTempBudget] = useState(settings.budget.toString());

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
  const remainingBudget = settings.budget - estimatedTotal;
  const budgetPercentage = (estimatedTotal / settings.budget) * 100;
  
  const isOverBudget = budgetPercentage > 100;
  const isWarning = budgetPercentage > 90 && !isOverBudget;

  const handleSaveBudget = () => {
    const num = parseFloat(tempBudget);
    if (!isNaN(num) && num > 0) {
      setSettings({ budget: num });
    }
    setIsEditingBudget(false);
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">Grocery Helper</h1>
          <p className="text-sm text-muted-foreground mt-1">Your Iowa City Hy-Vee planner</p>
        </div>
      </header>

      <Card className={`border-2 transition-colors duration-300 ${isOverBudget ? 'border-destructive bg-destructive/5' : isWarning ? 'border-amber-500 bg-amber-50' : 'border-border'}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-medium text-muted-foreground uppercase tracking-wider text-xs">Trip Budget</CardTitle>
              {isEditingBudget ? (
                <div className="flex items-center mt-2 gap-2">
                  <span className="text-xl font-bold">$</span>
                  <Input 
                    type="number" 
                    value={tempBudget} 
                    onChange={(e) => setTempBudget(e.target.value)}
                    className="w-24 text-lg font-bold"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveBudget()}
                  />
                  <Button size="sm" onClick={handleSaveBudget}>Save</Button>
                </div>
              ) : (
                <div className="flex items-baseline mt-1 group cursor-pointer" onClick={() => setIsEditingBudget(true)}>
                  <span className="text-4xl font-bold tracking-tighter">${settings.budget.toFixed(2)}</span>
                  <Settings className="w-4 h-4 ml-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
            
            <div className="text-right">
              <CardTitle className="text-lg font-medium text-muted-foreground uppercase tracking-wider text-xs">Est. Total</CardTitle>
              <div className={`text-2xl font-bold tracking-tighter mt-1 ${isOverBudget ? 'text-destructive' : ''}`}>
                ${estimatedTotal.toFixed(2)}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className={isOverBudget ? 'text-destructive font-bold' : isWarning ? 'text-amber-600 font-bold' : 'text-muted-foreground'}>
                {isOverBudget 
                  ? `Over budget by $${Math.abs(remainingBudget).toFixed(2)}` 
                  : `${remainingBudget.toFixed(2)} remaining`}
              </span>
              <span className="text-muted-foreground">{budgetPercentage.toFixed(0)}% used</span>
            </div>
            <Progress 
              value={Math.min(budgetPercentage, 100)} 
              className={`h-3 ${isOverBudget ? '[&>div]:bg-destructive' : isWarning ? '[&>div]:bg-amber-500' : '[&>div]:bg-primary'}`} 
            />
            
            {(isWarning || isOverBudget) && (
              <div className={`mt-3 p-3 rounded-lg flex items-start gap-3 ${isOverBudget ? 'bg-destructive/10 text-destructive-foreground' : 'bg-amber-100 text-amber-900'}`}>
                <AlertCircle className={`w-5 h-5 mt-0.5 ${isOverBudget ? 'text-destructive' : 'text-amber-600'}`} />
                <div className="text-sm">
                  {isOverBudget ? (
                    <p className="font-medium text-destructive">You're over budget! Review your list to remove nice-to-have items before checkout.</p>
                  ) : (
                    <p className="font-medium text-amber-800">You're within 10% of your budget. Add items carefully.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Link href="/search">
          <Card className="hover-elevate cursor-pointer transition-colors hover:border-primary">
            <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Find Items</h3>
              <p className="text-xs text-muted-foreground">Search the catalog</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/list">
          <Card className="hover-elevate cursor-pointer transition-colors hover:border-primary relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3 text-secondary-foreground">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">View List</h3>
              <p className="text-xs text-muted-foreground">{list.length} items planned</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Receipt className="w-5 h-5 mr-2 text-primary" />
            Current Trip Summary
          </CardTitle>
          <CardDescription>A quick look at your planned purchases</CardDescription>
        </CardHeader>
        <CardContent>
          {list.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Your list is empty.</p>
              <Link href="/search">
                <Button variant="link" className="mt-2 text-primary">Start adding items</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Items</span>
                <span className="font-medium">{list.reduce((sum, item) => sum + item.quantity, 0)} items</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-medium">${estimatedSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Est. Tax ({settings.taxRate}%)</span>
                <span className="font-medium">${estimatedTax.toFixed(2)}</span>
              </div>
              
              <Link href="/list">
                <Button className="w-full mt-4" variant="secondary">Review Full List</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
