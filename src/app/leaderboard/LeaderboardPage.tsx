"use client";

import React, { useEffect, useState } from "react";
import { Card } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { GetLeaderboardExternal } from "./actions";

interface RankData {
  level: number;
  rank_score: number;
  battle_count: number;
  win_count: number;
}

interface Player {
  score: number;
  uid: string;
  name: string;
  cur_head_icon_id: string;
  rank: RankData;
}

interface LeaderboardData {
  device: string;
  players: Player[];
  timestamp: number;
  season: string;
}

function Leaderboard() {
  const [seasonNum, setSeasonNum] = useState(1);
  const [deviceNum, setDeviceNum] = useState(1);
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardData | null>(null);

  const calculateWinRate = (wins: number, totalGames: number) => {
    return ((wins / totalGames) * 100).toFixed(2);
  };

  const handleButton = async (seasonNum: number, deviceNum: number) => {
    try {
      const response = await GetLeaderboardExternal(seasonNum, deviceNum);
      setLeaderboardData(response);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-green-400 drop-shadow-glow">
          LEADERBOARD
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          quos numquam at aut placeat, quibusdam nobis ad perspiciatis! Ipsam
          necessitatibus reiciendis, ipsum accusantium assumenda cumque a alias
          totam quidem hic.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 flex gap-4">
        <div className="flex items-center gap-2">
          <label className="text-gray-400">Season:</label>
          <input
            type="number"
            value={seasonNum}
            onChange={(e) => setSeasonNum(Number(e.target.value))}
            className="w-20 rounded bg-gray-800 px-2 py-1 text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-gray-400">Device:</label>
          <input
            type="number"
            value={deviceNum}
            onChange={(e) => setDeviceNum(Number(e.target.value))}
            className="w-20 rounded bg-gray-800 px-2 py-1 text-white"
          />
        </div>
        <button
          onClick={() => handleButton(seasonNum, deviceNum)}
          className="rounded bg-green-600 px-4 py-1 text-white hover:bg-green-700"
        >
          Fetch Leaderboard
        </button>
      </div>

      {/* Leaderboard Table */}
      <Card className="border-gray-800">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-800">
              <TableHead className="text-gray-400">RANK</TableHead>
              <TableHead className="text-gray-400">PLAYER</TableHead>
              <TableHead className="text-gray-400">SCORE</TableHead>
              <TableHead className="text-gray-400">BATTLES</TableHead>
              <TableHead className="text-gray-400">WIN RATE</TableHead>
              <TableHead className="text-gray-400">LEVEL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData?.players.map((player, index) => (
              <TableRow key={player.uid} className="border-gray-800">
                <TableCell className="font-mono text-gray-400">
                  [{index + 1}]
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-gray-700">
                      {/* Placeholder for player icon */}
                    </div>
                    <span className="text-gray-200">{player.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-200">
                  {player.rank.rank_score.toFixed(2)}
                </TableCell>
                <TableCell className="text-gray-200">
                  {player.rank.battle_count}
                </TableCell>
                <TableCell className="text-gray-200">
                  {calculateWinRate(
                    player.rank.win_count,
                    player.rank.battle_count,
                  )}
                  %
                </TableCell>
                <TableCell className="text-gray-200">
                  {player.rank.level}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Leaderboard;
