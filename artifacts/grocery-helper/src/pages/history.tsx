import React from "react";
import { useGroceryStore } from "@/hooks/use-store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, parseISO } from "date-fns";
import { TrendingUp, TrendingDown, Receipt, CheckCircle2, AlertCircle } from "lucide-react";

export default function HistoryPage() {
  const { history } = useGroceryStore();

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
          <TrendingUp className="w-10 h-10 text-muted-foreground opacity-50" />
        </div>
        <h2 className="text-2xl font-bold text-foreground font-serif mb-2">No history yet</h2>
        <p className="text-muted-foreground max-w-sm mb-8">
          Complete a grocery trip and log your final receipt to start tracking your budgeting accuracy over time.
        </p>
      </div>
    );
  }

  // Calculate some aggregate stats
  const totalSpent = history.reduce((sum, trip) => sum + trip.actualTotal, 0);
  const tripsUnderBudget = history.filter(t => t.status === 'under').length;
  const avgVariance = history.reduce((sum, trip) => sum + trip.variancePercent, 0) / history.length;

  return (
    <div className="space-y-6 pb-12">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">Trip History</h1>
        <p className="text-sm text-muted-foreground mt-1">Learn from past predictions</p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{tripsUnderBudget} / {history.length}</div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Trips Under Budget</div>
          </CardContent>
        </Card>
        <Card className="bg-secondary border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-foreground mb-1">{avgVariance > 0 ? '+' : ''}{avgVariance.toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Avg Prediction Error</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-foreground px-1">Past Receipts</h3>
        {history.map((trip) => {
          const isUnder = trip.status === 'under';
          const varianceIsPositive = trip.variancePercent > 0; // Actual was higher than estimated
          
          return (
            <Card key={trip.id} className="overflow-hidden border-border/50">
              <div className={`h-1.5 w-full ${isUnder ? 'bg-green-500' : 'bg-destructive'}`} />
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-medium text-foreground">
                      {format(parseISO(trip.date), "MMMM d, yyyy")}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {trip.itemCount} items planned
                    </div>
                  </div>
                  <Badge variant={isUnder ? "outline" : "destructive"} className={isUnder ? 'bg-green-50 text-green-700 border-green-200' : ''}>
                    {isUnder ? (
                      <span className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Under Budget</span>
                    ) : (
                      <span className="flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Over Budget</span>
                    )}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/50">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Estimated</div>
                    <div className="font-medium mt-1">${trip.estimatedTotal.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Actual Receipt</div>
                    <div className="font-bold text-lg leading-none mt-1">${trip.actualTotal.toFixed(2)}</div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between bg-secondary/50 rounded p-2 px-3">
                  <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
                  <div className={`text-sm font-bold flex items-center ${varianceIsPositive ? 'text-amber-600' : 'text-green-600'}`}>
                    {varianceIsPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {Math.abs(trip.variancePercent).toFixed(1)}% {varianceIsPositive ? 'higher' : 'lower'}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
