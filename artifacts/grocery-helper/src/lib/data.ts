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
  // Produce
  { id: "p1",  name: "Bananas",                    category: "Produce",    unitLabel: "lb",    price: 0.59,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p2",  name: "Honeycrisp Apples",           category: "Produce",    unitLabel: "lb",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p3",  name: "Baby Spinach (Bag)",           category: "Produce",    unitLabel: "ea",    price: 3.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p4",  name: "Avocados",                    category: "Produce",    unitLabel: "ea",    price: 1.25,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p5",  name: "Roma Tomatoes",               category: "Produce",    unitLabel: "lb",    price: 1.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p6",  name: "White Onions",                category: "Produce",    unitLabel: "lb",    price: 1.49,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p7",  name: "Russet Potatoes",             category: "Produce",    unitLabel: "lb",    price: 0.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p8",  name: "Broccoli",                    category: "Produce",    unitLabel: "head",  price: 1.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p9",  name: "Carrots (Bag)",               category: "Produce",    unitLabel: "2 lb",  price: 1.49,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p10", name: "Celery",                      category: "Produce",    unitLabel: "bunch", price: 1.79,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p11", name: "Green Bell Peppers",          category: "Produce",    unitLabel: "ea",    price: 0.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p12", name: "Cucumber",                    category: "Produce",    unitLabel: "ea",    price: 0.89,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p13", name: "Garlic (Bulb)",               category: "Produce",    unitLabel: "ea",    price: 0.79,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p14", name: "Sweet Potatoes",              category: "Produce",    unitLabel: "lb",    price: 1.29,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p15", name: "Strawberries",                category: "Produce",    unitLabel: "16oz",  price: 3.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },
  { id: "p16", name: "Blueberries",                 category: "Produce",    unitLabel: "pint",  price: 4.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },
  { id: "p17", name: "Grapes (Red Seedless)",       category: "Produce",    unitLabel: "lb",    price: 2.29,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },
  { id: "p18", name: "Lemons",                      category: "Produce",    unitLabel: "ea",    price: 0.79,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p19", name: "Mushrooms (White)",           category: "Produce",    unitLabel: "8oz",   price: 2.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },
  { id: "p20", name: "Zucchini",                    category: "Produce",    unitLabel: "ea",    price: 0.99,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p21", name: "Kale (Bunch)",                category: "Produce",    unitLabel: "bunch", price: 2.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },
  { id: "p22", name: "Iceberg Lettuce",             category: "Produce",    unitLabel: "head",  price: 1.49,  taxable: false, priorityHint: "staple",       aisle: "Produce" },
  { id: "p23", name: "Cherry Tomatoes",             category: "Produce",    unitLabel: "pint",  price: 2.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Produce" },

  // Dairy & Eggs
  { id: "d1",  name: "Hy-Vee Large Eggs (Dozen)",  category: "Dairy",      unitLabel: "ea",    price: 2.29,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d2",  name: "Hy-Vee 2% Milk (Gallon)",    category: "Dairy",      unitLabel: "ea",    price: 3.19,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d3",  name: "Oatly Oat Milk",             category: "Dairy",      unitLabel: "ea",    price: 4.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d4",  name: "Hy-Vee Shredded Cheddar",    category: "Dairy",      unitLabel: "8oz",   price: 2.50,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d5",  name: "Chobani Greek Yogurt",        category: "Dairy",      unitLabel: "ea",    price: 5.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d6",  name: "Hy-Vee Whole Milk (Gallon)", category: "Dairy",      unitLabel: "ea",    price: 3.29,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d7",  name: "Hy-Vee Butter (Salted)",     category: "Dairy",      unitLabel: "lb",    price: 4.49,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d8",  name: "Cream Cheese (Block)",        category: "Dairy",      unitLabel: "8oz",   price: 2.99,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d9",  name: "Hy-Vee Sour Cream",          category: "Dairy",      unitLabel: "16oz",  price: 2.29,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d10", name: "Mozzarella (Shredded)",       category: "Dairy",      unitLabel: "8oz",   price: 2.79,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },
  { id: "d11", name: "Parmesan (Shredded)",         category: "Dairy",      unitLabel: "5oz",   price: 3.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d12", name: "Heavy Whipping Cream",        category: "Dairy",      unitLabel: "pt",    price: 3.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d13", name: "Silk Almond Milk",            category: "Dairy",      unitLabel: "half-gal", price: 3.79, taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },
  { id: "d14", name: "Hy-Vee Cottage Cheese",       category: "Dairy",      unitLabel: "16oz",  price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Dairy" },

  // Meat & Protein
  { id: "m1",  name: "Hy-Vee Chicken Breasts",     category: "Meat",       unitLabel: "lb",    price: 3.49,  taxable: false, priorityHint: "staple",       aisle: "Meat" },
  { id: "m2",  name: "Ground Beef (80/20)",         category: "Meat",       unitLabel: "lb",    price: 4.99,  taxable: false, priorityHint: "staple",       aisle: "Meat" },
  { id: "m3",  name: "Hy-Vee Thick Cut Bacon",     category: "Meat",       unitLabel: "16oz",  price: 6.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Meat" },
  { id: "m4",  name: "Tofu (Extra Firm)",           category: "Meat",       unitLabel: "ea",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Produce/Vegan" },
  { id: "m5",  name: "Salmon Fillet",               category: "Meat",       unitLabel: "lb",    price: 8.99,  taxable: false, priorityHint: "splurge",      aisle: "Meat" },
  { id: "m6",  name: "Pork Chops",                  category: "Meat",       unitLabel: "lb",    price: 3.99,  taxable: false, priorityHint: "staple",       aisle: "Meat" },
  { id: "m7",  name: "Italian Sausage",             category: "Meat",       unitLabel: "19oz",  price: 5.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Meat" },
  { id: "m8",  name: "Hy-Vee Deli Turkey (Sliced)",category: "Meat",       unitLabel: "lb",    price: 8.99,  taxable: false, priorityHint: "staple",       aisle: "Deli" },
  { id: "m9",  name: "Hy-Vee Deli Ham (Sliced)",   category: "Meat",       unitLabel: "lb",    price: 7.99,  taxable: false, priorityHint: "staple",       aisle: "Deli" },
  { id: "m10", name: "Chicken Thighs (Bone-in)",    category: "Meat",       unitLabel: "lb",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Meat" },
  { id: "m11", name: "Tilapia Fillets",             category: "Meat",       unitLabel: "lb",    price: 5.99,  taxable: false, priorityHint: "staple",       aisle: "Meat" },
  { id: "m12", name: "Ground Turkey",               category: "Meat",       unitLabel: "lb",    price: 4.49,  taxable: false, priorityHint: "staple",       aisle: "Meat" },

  // Pantry
  { id: "pa1",  name: "Hy-Vee Sandwich Bread",     category: "Pantry",     unitLabel: "ea",    price: 1.99,  taxable: false, priorityHint: "staple",       aisle: "Bread" },
  { id: "pa2",  name: "Hy-Vee Peanut Butter",      category: "Pantry",     unitLabel: "ea",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 3" },
  { id: "pa3",  name: "Hy-Vee Pasta (Spaghetti)",  category: "Pantry",     unitLabel: "16oz",  price: 1.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 4" },
  { id: "pa4",  name: "Hy-Vee Pasta Sauce",        category: "Pantry",     unitLabel: "24oz",  price: 1.89,  taxable: false, priorityHint: "staple",       aisle: "Aisle 4" },
  { id: "pa5",  name: "Black Beans (Canned)",       category: "Pantry",     unitLabel: "ea",    price: 0.89,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa6",  name: "Jasmine Rice",               category: "Pantry",     unitLabel: "32oz",  price: 3.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa7",  name: "Chicken Broth (32oz)",       category: "Pantry",     unitLabel: "ea",    price: 2.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa8",  name: "Diced Tomatoes (Canned)",    category: "Pantry",     unitLabel: "14.5oz",price: 0.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa9",  name: "Hy-Vee Chicken Noodle Soup",category: "Pantry",     unitLabel: "ea",    price: 1.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa10", name: "Kidney Beans (Canned)",      category: "Pantry",     unitLabel: "ea",    price: 0.89,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa11", name: "Corn (Canned)",              category: "Pantry",     unitLabel: "ea",    price: 0.79,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa12", name: "Hy-Vee All-Purpose Flour",  category: "Pantry",     unitLabel: "5 lb",  price: 3.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "pa13", name: "Hy-Vee Granulated Sugar",   category: "Pantry",     unitLabel: "4 lb",  price: 2.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "pa14", name: "Olive Oil (Extra Virgin)",   category: "Pantry",     unitLabel: "17oz",  price: 6.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "pa15", name: "Hy-Vee Vegetable Oil",       category: "Pantry",     unitLabel: "48oz",  price: 4.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "pa16", name: "Pasta (Penne)",               category: "Pantry",     unitLabel: "16oz",  price: 1.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 4" },
  { id: "pa17", name: "Mac & Cheese (Kraft)",        category: "Pantry",     unitLabel: "ea",    price: 1.19,  taxable: false, priorityHint: "staple",       aisle: "Aisle 4" },
  { id: "pa18", name: "Hy-Vee Oatmeal (Old Fashioned)", category: "Pantry", unitLabel: "42oz",  price: 3.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 1" },
  { id: "pa19", name: "Saltine Crackers",            category: "Pantry",     unitLabel: "ea",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 6" },
  { id: "pa20", name: "Strawberry Jam",              category: "Pantry",     unitLabel: "18oz",  price: 3.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 3" },
  { id: "pa21", name: "Tuna (Canned, in Water)",    category: "Pantry",     unitLabel: "5oz",   price: 1.19,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },
  { id: "pa22", name: "Lentils (Dry)",               category: "Pantry",     unitLabel: "16oz",  price: 1.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 2" },

  // Condiments & Sauces
  { id: "c1",  name: "Heinz Ketchup",              category: "Condiments", unitLabel: "20oz",  price: 2.99,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "c2",  name: "French's Yellow Mustard",    category: "Condiments", unitLabel: "14oz",  price: 2.29,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "c3",  name: "Hellmann's Mayonnaise",      category: "Condiments", unitLabel: "30oz",  price: 5.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "c4",  name: "Frank's RedHot Sauce",       category: "Condiments", unitLabel: "12oz",  price: 3.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 5" },
  { id: "c5",  name: "Soy Sauce",                  category: "Condiments", unitLabel: "10oz",  price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 5" },
  { id: "c6",  name: "Ranch Dressing",             category: "Condiments", unitLabel: "16oz",  price: 3.29,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 5" },
  { id: "c7",  name: "Salsa (Pace Medium)",        category: "Condiments", unitLabel: "16oz",  price: 3.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 5" },
  { id: "c8",  name: "Sriracha",                   category: "Condiments", unitLabel: "17oz",  price: 3.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 5" },

  // Breakfast
  { id: "br1", name: "Cheerios",                   category: "Breakfast",  unitLabel: "12oz",  price: 4.49,  taxable: false, priorityHint: "staple",       aisle: "Aisle 1" },
  { id: "br2", name: "Frosted Mini-Wheats",        category: "Breakfast",  unitLabel: "18oz",  price: 4.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 1" },
  { id: "br3", name: "Quaker Instant Oatmeal Packets", category: "Breakfast", unitLabel: "10 pk", price: 3.99, taxable: false, priorityHint: "staple",     aisle: "Aisle 1" },
  { id: "br4", name: "Hy-Vee Pancake Mix",         category: "Breakfast",  unitLabel: "32oz",  price: 3.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 1" },
  { id: "br5", name: "Maple Syrup",                category: "Breakfast",  unitLabel: "12oz",  price: 4.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Aisle 1" },
  { id: "br6", name: "Hy-Vee Orange Juice (64oz)", category: "Breakfast",  unitLabel: "ea",    price: 3.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Dairy" },

  // Frozen
  { id: "f1",  name: "Hy-Vee Frozen Pizza",        category: "Frozen",     unitLabel: "ea",    price: 4.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f2",  name: "Frozen Mixed Veggies",        category: "Frozen",     unitLabel: "12oz",  price: 1.50,  taxable: false, priorityHint: "staple",       aisle: "Frozen" },
  { id: "f3",  name: "Ben & Jerry's Ice Cream",    category: "Frozen",     unitLabel: "pt",    price: 5.99,  taxable: false, priorityHint: "splurge",      aisle: "Frozen" },
  { id: "f4",  name: "Hy-Vee Frozen Burritos (4pk)",category: "Frozen",    unitLabel: "ea",    price: 3.99,  taxable: false, priorityHint: "staple",       aisle: "Frozen" },
  { id: "f5",  name: "Amy's Frozen Burrito",        category: "Frozen",     unitLabel: "ea",    price: 3.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f6",  name: "Hy-Vee Frozen Waffles (8pk)",category: "Frozen",     unitLabel: "ea",    price: 2.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f7",  name: "Frozen Edamame",              category: "Frozen",     unitLabel: "12oz",  price: 2.49,  taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f8",  name: "Ore-Ida Frozen Fries",        category: "Frozen",     unitLabel: "28oz",  price: 4.99,  taxable: false, priorityHint: "nice-to-have", aisle: "Frozen" },
  { id: "f9",  name: "DiGiorno Frozen Pizza",       category: "Frozen",     unitLabel: "ea",    price: 7.99,  taxable: false, priorityHint: "splurge",      aisle: "Frozen" },
  { id: "f10", name: "Hy-Vee Frozen Corn",          category: "Frozen",     unitLabel: "12oz",  price: 1.29,  taxable: false, priorityHint: "staple",       aisle: "Frozen" },

  // Snacks
  { id: "s1",  name: "Doritos (Nacho Cheese)",     category: "Snacks",     unitLabel: "ea",    price: 4.50,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 7" },
  { id: "s2",  name: "Hy-Vee Tortilla Chips",      category: "Snacks",     unitLabel: "ea",    price: 2.50,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s5",  name: "Lay's Classic Chips",        category: "Snacks",     unitLabel: "ea",    price: 4.29,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 7" },
  { id: "s6",  name: "Cheez-Its",                  category: "Snacks",     unitLabel: "7oz",   price: 3.99,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s7",  name: "Goldfish Crackers",           category: "Snacks",     unitLabel: "6.6oz", price: 2.99,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s8",  name: "Kind Bar (Variety, 6pk)",    category: "Snacks",     unitLabel: "ea",    price: 6.99,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s9",  name: "Clif Bar (Box of 6)",        category: "Snacks",     unitLabel: "ea",    price: 8.99,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s10", name: "Hy-Vee Trail Mix",            category: "Snacks",     unitLabel: "9oz",   price: 4.49,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s11", name: "Popcorn (Skinny Pop)",        category: "Snacks",     unitLabel: "4.4oz", price: 3.49,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 7" },
  { id: "s12", name: "Pringles (Original)",         category: "Snacks",     unitLabel: "ea",    price: 2.49,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 7" },

  // Beverages
  { id: "bv1", name: "Coca-Cola (12 Pack)",         category: "Beverages",  unitLabel: "ea",    price: 7.99,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 8" },
  { id: "bv2", name: "LaCroix Sparkling Water",     category: "Beverages",  unitLabel: "8 Pack",price: 4.50,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 8" },
  { id: "bv3", name: "Pepsi (12 Pack)",             category: "Beverages",  unitLabel: "ea",    price: 7.99,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 8" },
  { id: "bv4", name: "Sprite (12 Pack)",            category: "Beverages",  unitLabel: "ea",    price: 7.99,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 8" },
  { id: "bv5", name: "Hy-Vee Purified Water (24pk)",category: "Beverages", unitLabel: "ea",    price: 3.99,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 8" },
  { id: "bv6", name: "Gatorade (32oz)",             category: "Beverages",  unitLabel: "ea",    price: 1.99,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 8" },
  { id: "bv7", name: "Red Bull (4 Pack)",           category: "Beverages",  unitLabel: "ea",    price: 9.99,  taxable: true,  priorityHint: "splurge",      aisle: "Aisle 8" },
  { id: "bv8", name: "Hy-Vee Iced Coffee (11oz)",  category: "Beverages",  unitLabel: "ea",    price: 2.49,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 8" },
  { id: "bv9", name: "Snapple Iced Tea",            category: "Beverages",  unitLabel: "ea",    price: 1.79,  taxable: true,  priorityHint: "nice-to-have", aisle: "Aisle 8" },

  // Bakery
  { id: "bk1", name: "Hy-Vee Whole Wheat Bread",   category: "Bakery",     unitLabel: "ea",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Bakery" },
  { id: "bk2", name: "Hy-Vee Hamburger Buns (8pk)",category: "Bakery",     unitLabel: "ea",    price: 2.19,  taxable: false, priorityHint: "staple",       aisle: "Bakery" },
  { id: "bk3", name: "Hy-Vee Hot Dog Buns (8pk)",  category: "Bakery",     unitLabel: "ea",    price: 1.99,  taxable: false, priorityHint: "staple",       aisle: "Bakery" },
  { id: "bk4", name: "Flour Tortillas (10pk)",      category: "Bakery",     unitLabel: "ea",    price: 2.99,  taxable: false, priorityHint: "staple",       aisle: "Bakery" },
  { id: "bk5", name: "Corn Tortillas (30pk)",       category: "Bakery",     unitLabel: "ea",    price: 2.49,  taxable: false, priorityHint: "staple",       aisle: "Bakery" },
  { id: "bk6", name: "Hy-Vee Bagels (6pk)",         category: "Bakery",     unitLabel: "ea",    price: 3.29,  taxable: false, priorityHint: "nice-to-have", aisle: "Bakery" },

  // Household
  { id: "h1",  name: "Hy-Vee Paper Towels",         category: "Household",  unitLabel: "2 Rolls", price: 3.99, taxable: true, priorityHint: "staple",      aisle: "Aisle 10" },
  { id: "h2",  name: "Toilet Paper",                category: "Household",  unitLabel: "4 Rolls", price: 4.99, taxable: true, priorityHint: "staple",      aisle: "Aisle 10" },
  { id: "h3",  name: "Dawn Dish Soap",              category: "Household",  unitLabel: "ea",    price: 3.49,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 11" },
  { id: "h4",  name: "Tide Pods",                   category: "Household",  unitLabel: "ea",    price: 12.99, taxable: true,  priorityHint: "staple",       aisle: "Aisle 11" },
  { id: "h5",  name: "Ziploc Bags (Gallon, 30pk)",  category: "Household",  unitLabel: "ea",    price: 4.99,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 10" },
  { id: "h6",  name: "Hy-Vee Trash Bags (13 gal)", category: "Household",  unitLabel: "ea",    price: 6.99,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 10" },
  { id: "h7",  name: "Sponges (3pk)",               category: "Household",  unitLabel: "ea",    price: 2.99,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 11" },
  { id: "h8",  name: "Aluminum Foil",               category: "Household",  unitLabel: "ea",    price: 3.49,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 10" },

  // Personal Care
  { id: "pc1", name: "Hy-Vee 2-in-1 Shampoo",      category: "Personal Care", unitLabel: "ea", price: 3.49,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 12" },
  { id: "pc2", name: "Dove Body Wash",              category: "Personal Care", unitLabel: "ea", price: 5.99,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 12" },
  { id: "pc3", name: "Colgate Toothpaste",          category: "Personal Care", unitLabel: "ea", price: 3.29,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 12" },
  { id: "pc4", name: "Secret Deodorant",            category: "Personal Care", unitLabel: "ea", price: 4.49,  taxable: true,  priorityHint: "staple",       aisle: "Aisle 12" },
  { id: "pc5", name: "Hy-Vee Ibuprofen (100ct)",   category: "Personal Care", unitLabel: "ea", price: 7.99,  taxable: true,  priorityHint: "staple",       aisle: "Pharmacy" },
];
