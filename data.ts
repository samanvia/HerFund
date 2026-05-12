// data.ts
export const AbigailData = {
  name: "Abigail",
  balance: 3525.70,
  savings: 2560.90,
  // ADD THIS SECTION IF IT'S MISSING:
  loans: {
    total: 30000,
    remaining: 9000,
    paid: 21000,
    percent: 70
  },
  portfolio: [
    { ticker: "FZROX", name: "Fidelity ZERO Total Market", value: 1200.45, change: "+6.38%" },
    { ticker: "FZILX", name: "Fidelity ZERO International", value: 850.20, change: "+2.10%" },
    { ticker: "FBGRX", name: "Fidelity Blue Chip Growth", value: 500.00, change: "+8.45%" }
  ],
  budget: [
    { category: 'Food', spent: 324, limit: 400, color: 'bg-watermelon' },
    { category: 'Coffee', spent: 57, limit: 60, color: 'bg-rose-gold' },
  ]
};