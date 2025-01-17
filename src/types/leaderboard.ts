export type LeaderboardType = {
  seasonNum: number;
  deviceNum: number;
};

// Define the type for the rank object
export interface PlayerRank {
  level: number; // Player's level
  rank_score: number; // Player's rank score
  battle_count: number; // Total battles played
  win_count: number; // Total wins
}

// Define the type for each player
export interface Player {
  uid: string; // Unique identifier for the player
  score: number; // Player's score
  name: string; // Player's name
  cur_head_icon_id: string; // Icon ID for the player's current head icon
  rank: PlayerRank; // Player's rank details
}

// Define the type for the overall response
export interface LeaderboardResponse {
  device: string; // Device type (e.g., 1 for PC, 2 for PS5, etc.)
  players: Player[]; // Array of players
  timestamp: number; // Timestamp for when the data was fetched
  season: string; // Current season
}

