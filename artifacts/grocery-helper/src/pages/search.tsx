import React, { useState, useMemo } from "react";
import { useGroceryStore } from "@/hooks/use-store";
import { CATALOG } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { addItem, list } = useGroceryStore();
  const { toast } = useToast();

  const categories = useMemo(() => {
    const cats = new Set(CATALOG.map(item => item.category));
    return Array.from(cats).sort();
  }, []);

  const filteredCatalog = useMemo(() => {
    return CATALOG.filter((item) => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) || 
                           item.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = activeCategory ? item.category === activeCategory : true;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const handleAddItem = (item: typeof CATALOG[0]) => {
    addItem(item, 1);
    toast({
      title: "Added to list",
      description: `${item.name} has been added to your planned trip.`,
      duration: 2000,
    });
  };

  const isItemInList = (id: string) => list.some(item => item.productId === id);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-foreground font-serif">Catalog</h1>
        <p className="text-sm text-muted-foreground mt-1">Search realistic Iowa City Hy-Vee prices</p>
      </header>

      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur pb-4 pt-2 -mx-4 px-4 md:mx-0 md:px-0 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            placeholder="Search groceries..." 
            className="pl-10 h-12 text-base rounded-xl border-2 focus-visible:ring-primary/20"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          <Badge 
            variant={activeCategory === null ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap snap-start px-4 py-1.5"
            onClick={() => setActiveCategory(null)}
          >
            All Items
          </Badge>
          {categories.map(cat => (
            <Badge 
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap snap-start px-4 py-1.5"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex-1 space-y-3 pb-8">
        {filteredCatalog.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>No items found matching your search.</p>
            <Button variant="link" onClick={() => { setQuery(""); setActiveCategory(null); }}>
              Clear search
            </Button>
          </div>
        ) : (
          filteredCatalog.map(item => {
            const inList = isItemInList(item.id);
            return (
              <Card key={item.id} className="overflow-hidden hover-elevate transition-all border-border/50">
                <CardContent className="p-0">
                  <div className="flex items-center p-3 sm:p-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                        {item.priorityHint === 'splurge' && (
                          <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">Splurge</span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                        <span>{item.category}</span>
                        <span>•</span>
                        <span>{item.aisle}</span>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col items-end shrink-0">
                      <div className="font-bold text-base mb-2">
                        ${item.price.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">/{item.unitLabel}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant={inList ? "secondary" : "default"}
                        className={`rounded-full px-4 h-8 text-xs ${inList ? 'text-primary' : ''}`}
                        onClick={() => handleAddItem(item)}
                      >
                        {inList ? <><Check className="w-3 h-3 mr-1" /> Added</> : <><Plus className="w-3 h-3 mr-1" /> Add</>}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  );
}
