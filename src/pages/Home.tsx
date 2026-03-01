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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Today's NHL Games</h1>
      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {games.map(game => (
            <li
              key={game.gamePk}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img src={game.homeTeamLogo} alt={game.homeTeamAbbrev} width={50} />
                <p>{game.homeTeamName}</p>
              </div>

              <span style={{ fontWeight: "bold" }}>vs</span>

              <div style={{ textAlign: "center" }}>
                <img src={game.awayTeamLogo} alt={game.awayTeamAbbrev} width={50} />
                <p>{game.awayTeamName}</p>
              </div>

              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <p>{new Date(game.startTime).toLocaleString()}</p>
                <p>{game.venue}</p>
                <p>Status: {game.status}</p>
                <a href={game.ticketsLink} target="_blank" rel="noreferrer">
                  Tickets
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;