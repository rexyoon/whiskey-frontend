export type Whiskey = {
  id: string;
  name: string;
  type: string;     // e.g., Single Malt, Bourbon
  region: string;   // e.g., Islay, Speyside
  abv: number;      // alcohol by volume
  tastingNotes: string[];
  tags: string[];
};
