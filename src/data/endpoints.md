/\*\*

- @file endpoints.md
- @description This file contains the base URL for the Rival Tracker API.
-
- @host https://api.rivalstracker.com
- The base URL for accessing the Rival Tracker API endpoints.
  \*/

# HOST API: https://api.rivalstracker.com

**Player Specifc Stats**

## Player: api/player/{id}

**Top 500 players: device**

## Leaderboard: /api/leaderboard/data

## /data?device=1 is pc

## device=2 is ps5

## device=3 is xbox

## Example for alternating seasons: https://api.rivalstracker.com/api/leaderboard/data?device=1&season=1

**General hero data: heroID, teamups, winrates**

## Heroes: /api/heroes/data

**Specifc hero data: damage per minute, healing per minute, damage taken per second. Kills,Deaths,Assists,KDA,PlayTime**

## Hero Stats: /api/heroes-stats/data

**The distribution of Maravel Rivals ranks for PC only by player count**

## Rank-Distribution: /api/rank-distribution/data
