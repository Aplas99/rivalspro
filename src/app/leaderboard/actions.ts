import { db } from "~/server/db";
import { type LeaderboardResponse } from "../../types/leaderboard";

const baseLBUrl = "https://api.rivalstracker.com/api/leaderboard/data";
// const UrlPC = "/data?device=1";
// const UrlPs5 = "/data?device=2";
// const UrlXbox = "/data?device=3";

const GetLeaderboardExternal = async (
  seasonNum: number,
  deviceNum: number,
): Promise<LeaderboardResponse | null> => {
  const UrlDevice = `?device=${deviceNum}`;
  const UrlSeason = `&season=${seasonNum}`;
  try {
    const response = await fetch(`${baseLBUrl}${UrlDevice}${UrlSeason}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = (await response.json()) as LeaderboardResponse;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  } catch (error) {
    console.log("server side error: ", error);
    return null;
  }
};

const GetLeaderboardInternalPC = async () => {
  // db.leaderboard.findMany()
};

// const updateLeaderboard = async (seasonNum: number, deviceNum: number) => {
//   const data = await GetLeaderboardExternal(seasonNum, deviceNum);

//   if (!data || !data.players) {
//     console.error("Failed to fetch leaderboard data");
//     return;
//   }

//   const { device, players, season } = data;

//   for (const player of players) {
//     await db.leaderboard.create({
//       data: {
//         playerId: player.uid,
//         playerName: player.name,
//         device: parseInt(device),
//         rankLevel: player.rank.level,
//         rankScore: player.rank.rank_score,
//         battleCount: player.rank.battle_count,
//         winCount: player.rank.win_count,
//         curHeadIconId: player.cur_head_icon_id,
//         score: player.score,
//         season: parseInt(season),
//         fetchedAt: new Date(),
//       },
//     });
//   }
// };

export { GetLeaderboardExternal, GetLeaderboardInternalPC };
