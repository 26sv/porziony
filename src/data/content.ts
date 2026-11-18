import type { Ingredient } from "@/lib/scale";

export type Tone = "accent" | "slate" | "sage";

export const nav = [
  { label: "Features", href: "#features" },
  { label: "AI Chef ✨", href: "#chef" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const lasagna: Ingredient[] = [
  { name: "Flour", qty: 500, unit: "g" },
  { name: "Eggs", qty: 2, unit: "" },
  { name: "Cheese", qty: 300, unit: "g" },
];

export const features: { icon: string; title: string; text: string; note?: string; tone: Tone }[] = [
  { icon: "📷", title: "AI Recipe Scanner", text: "Scan recipes from books, paper notes, screenshots and photos.", note: "Extracts ingredients, quantities and instructions.", tone: "accent" },
  { icon: "⚖️", title: "Smart Portion Conversion", text: "Instantly adapt any recipe, from 4 people to 12, with every quantity recalculated.", tone: "slate" },
  { icon: "🛒", title: "Shopping List Generator", text: "Combine ingredients from several recipes, add up quantities and remove duplicates.", tone: "sage" },
  { icon: "👩‍🍳", title: "AI Chef", text: "Ask “What can I cook with eggs, zucchini and parmesan?” and get personal suggestions.", tone: "accent" },
  { icon: "🌿", title: "Allergen Search", text: "Filter by gluten, lactose, nuts, eggs, vegan or vegetarian.", tone: "slate" },
  { icon: "☁️", title: "Cloud Recipe Library", text: "Open your recipes on mobile, tablet and desktop. Everything syncs automatically.", tone: "sage" },
];

export const suggestions = [
  ["Zucchini frittata", "20 min"], ["Parmesan zucchini carbonara", "25 min"],
  ["Baked zucchini fritters", "30 min"], ["Zucchini and egg tart", "40 min"],
  ["Creamy zucchini risotto", "35 min"],
];

export const testimonials = [
  { quote: "I scanned my grandmother’s notebook in one evening. Scaling for family dinners is now a single tap.", name: "Elena V.", role: "Home cook" },
  { quote: "Allergen filters let me build client plans in minutes instead of hours.", name: "Dr. Paolo M.", role: "Nutritionist" },
  { quote: "The AI Chef gives my team new menu ideas from whatever is in the walk-in.", name: "Chef Luca B.", role: "Professional chef" },
];

export const plans = [
  { name: "Free", price: "€0", period: "", cta: "Start Free", featured: false, items: ["Up to 50 recipes", "Cloud synchronization", "Portion conversion"] },
  { name: "Pro", price: "€25", period: "/month", cta: "Get Pro", featured: true, items: ["Unlimited recipes", "AI Chef", "AI Scanner", "Shopping Lists", "Allergen Filters"] },
];

export const sidebar = ["Dashboard", "My Recipes", "AI Chef", "Shopping Lists", "Favorites", "Settings"];
