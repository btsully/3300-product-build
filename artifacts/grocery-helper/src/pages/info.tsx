import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Info, Store, Target, AlertTriangle } from "lucide-react";

export default function InfoPage() {
  return (
    <div className="space-y-6 pb-12">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">About</h1>
        <p className="text-sm text-muted-foreground mt-1">Context and limitations</p>
      </header>

      <Card className="border-border shadow-sm">
        <CardHeader className="bg-secondary/30 pb-4">
          <CardTitle className="flex items-center text-lg">
            <Target className="w-5 h-5 mr-2 text-primary" />
            The Problem
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 text-sm text-foreground/90 leading-relaxed space-y-3">
          <p>
            Grocery shopping on a tight student budget often results in checkout anxiety—that moment at the register where the total is higher than expected.
          </p>
          <p>
            This tool is designed specifically for University of Iowa students shopping at the Iowa City Hy-Vee. It serves as a calming pre-trip planning companion to ensure you know your total <em>before</em> you walk in the door.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border shadow-sm">
        <CardHeader className="bg-secondary/30 pb-4">
          <CardTitle className="flex items-center text-lg">
            <Store className="w-5 h-5 mr-2 text-primary" />
            Scope & Assumptions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 text-sm text-foreground/90 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Single Store Focus:</strong> Prices and catalog items are modeled after the Iowa City Hy-Vee. It does not support multiple stores or price comparison across chains.</li>
            <li><strong>Local Storage:</strong> Your data (lists, settings, history) is saved directly in your browser. No login is required. If you clear your browser data, your history will be lost.</li>
            <li><strong>Tax Estimates:</strong> Tax rules are complex. The app uses a flat generalized rate (~6%) for items marked as taxable, and assumes produce/staples are non-taxable. <em>Actual receipt tax will vary slightly based on exact local laws and item classifications.</em></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg text-amber-900">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
            Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-amber-800 leading-relaxed">
          <p>
            Prices in this catalog are realistic estimates for demonstration purposes, but do not update live with Hy-Vee's actual inventory API. The estimated total is exactly that—an estimate. Always rely on the store's final receipt.
          </p>
        </CardContent>
      </Card>
      
      <div className="text-center pt-8 text-xs text-muted-foreground pb-8">
        <p>Built for the budget-conscious.</p>
        <p className="mt-1">Version 1.0</p>
      </div>
    </div>
  );
}
