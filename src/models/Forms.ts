export interface Rsvp {
  "name-lastName": string;
  "group-size": number;
  "group-type"?: string;
  rsvp: "yes" | "maybe" | "no";
  "arriving-date"?: Date | string;
  "leaving-date": Date | string;
  "has-tickets"?: boolean;
  "has-hotel"?: boolean;
  "hotel-name"?: string;
  code?: string;
}
