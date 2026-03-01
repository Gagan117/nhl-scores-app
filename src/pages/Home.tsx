import React, { useEffect, useState } from "react";

interface Game {
  gamePk: number;
  homeTeamName: string;
  homeTeamAbbrev: string;
  homeTeamLogo: string;
  awayTeamName: string;
  awayTeamAbbrev: string;
  awayTeamLogo: string;
  startTime: string;
  status: string;
  venue: string;
  ticketsLink: string;
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const loadGames = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/nhl-scores");
      const data = await response.json();

      const mappedGames = data.games.map((game: any) => ({
        gamePk: game.id,
        homeTeamName: game.homeTeam.name.default,
        homeTeamAbbrev: game.homeTeam.abbrev,
        homeTeamLogo: game.homeTeam.logo,
        awayTeamName: game.awayTeam.name.default,
        awayTeamAbbrev: game.awayTeam.abbrev,
        awayTeamLogo: game.awayTeam.logo,
        startTime: game.startTimeUTC,
        status: game.gameState,
        venue: game.venue.default,
        ticketsLink: game.ticketsLink
      }));

      setGames(mappedGames);
    } catch (error) {
      console.error("Failed to fetch games:", error);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-8">Today's NHL Games</h1>

      {games.length === 0 ? (
        <p className="text-white">Loading games...</p>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full">
          {games.map(game => (
            <div
              key={game.gamePk}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-1/2"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <img src={game.homeTeamLogo} alt={game.homeTeamAbbrev} className="w-16 mx-auto" />
                  <p className="mt-1 font-bold">{game.homeTeamAbbrev}</p>
                </div>

                <span className="font-bold text-lg">vs</span>

                <div className="text-center">
                  <img src={game.awayTeamLogo} alt={game.awayTeamAbbrev} className="w-16 mx-auto" />
                  <p className="mt-1 font-bold">{game.awayTeamAbbrev}</p>
                </div>
              </div>

              <div className="mt-4 text-center text-gray-600 text-sm">
                <p>{new Date(game.startTime).toLocaleString()}</p>
                <p>{game.venue}</p>
                <p>Status: {game.status}</p>
              </div>

              <a
                href={game.ticketsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 px-4 py-2 bg-blue-700 text-white rounded font-bold hover:bg-blue-800 transition"
              >
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;