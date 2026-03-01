import GameCard from "../components/GameCard";

export default function Home() {
  // Dummy data for now
  const games = [
    {
      gameId: "1",
      homeTeam: "Toronto Maple Leafs",
      awayTeam: "Montreal Canadiens",
      homeScore: 3,
      awayScore: 2,
      status: "Final",
    },
    {
      gameId: "2",
      homeTeam: "Boston Bruins",
      awayTeam: "New York Rangers",
      homeScore: null,
      awayScore: null,
      status: "Upcoming",
    },
    {
      gameId: "3",
      homeTeam: "Chicago Blackhawks",
      awayTeam: "Detroit Red Wings",
      homeScore: 1,
      awayScore: 4,
      status: "Live",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Today’s NHL Games</h1>
      {games.map((game) => (
        <GameCard
          key={game.gameId}
          gameId={game.gameId}
          homeTeam={game.homeTeam}
          awayTeam={game.awayTeam}
          homeScore={game.homeScore}
          awayScore={game.awayScore}
          status={game.status}
        />
      ))}
    </div>
  );
}