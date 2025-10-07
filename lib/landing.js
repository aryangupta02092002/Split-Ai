import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";

export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-orange-100",
    color: "text-orange-600",
    description:
      "From rent to road trips — group it, split it, settle it. Stay on top of shared spending.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Settle up with fewer payments, thanks to our smart algorithm.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-orange-100",
    color: "text-orange-600",
    description:
      "Understand your spending habits and shared costs at a glance.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Get automatic reminders for pending payments and spending insights.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-orange-100",
    color: "text-orange-600",
    description:
      "Split expenses equally, by percentage, or exact amounts — your way.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      /* custom inline icon (no Lucide equivalent) */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Get notified instantly when friends add expenses or repay.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Roommates, road trips, or parties — start a group and stay organized.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Track who paid and divide expenses among the group.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "Stay on top of who owes what and when it’s paid.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Babu Rao approves — no more bill confusion with SplitAi!",
    name: "Babu Rao",
    image: "/testimonials/babubhaiya.png",
    role: "Rental Property Manager",
  },
  {
    quote:
      "SplitAi does the math faster than I can say '25 din mein paisa double!'",
    name: "Raju",
    image: "/testimonials/raju.jpg",
    role: "Stock Market Expert",
  },
  {
    quote:
      "If I had SplitAi, I’d just add the coat and shoes to Raju’s balance. Simple.",
    name: "Shyam",
    image: "/testimonials/shyam.png",
    role: "Job Searcher",
  },
];