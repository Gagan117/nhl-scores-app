import { Link } from "react-router-dom";

interface GameCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
  gameId: string;
}

export default function GameCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  gameId,
}: GameCardProps) {
  return (
    <Link to={`/game/${gameId}`}>
      <div className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg p-4 mb-4 shadow-md flex justify-between items-center">
        {/* Teams */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="font-semibold text-lg">{awayTeam}</span>
          <span className="text-xl font-bold">{awayScore ?? "-"}</span>
          <span className="font-semibold text-lg">{homeTeam}</span>
          <span className="text-xl font-bold">{homeScore ?? "-"}</span>
        </div>

        {/* Status */}
        <div className="text-sm text-gray-300">{status}</div>
      </div>
    </Link>
  );
}