export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "mentor" | "admin";
}

export interface Signal {
  id: string;
  pair: string;
  direction: "BUY" | "SELL";
  entry: string;
  stopLoss: string;
  takeProfit: string;
  status: "Active" | "Closed";
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface JournalEntry {
  id: string;
  pair: string;
  result: "Win" | "Loss" | "Break Even";
  notes: string;
  date: string;
}

export interface EconomicEvent {
  id: string;
  title: string;
  currency: string;
  impact: "Low" | "Medium" | "High";
  date: string;
}
