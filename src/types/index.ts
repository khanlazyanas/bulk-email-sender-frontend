export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  status: "Subscribed" | "Bounced" | "Unsubscribed";
  addedOn: string;
}

export interface Campaign {
  id: number;
  name: string;
  date: string;
  status: "Completed" | "Draft";
  sent: number;
}