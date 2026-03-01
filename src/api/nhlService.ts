export const fetchTodayGames = async (date: string) => {
  try {
    const res = await fetch(`http://localhost:5000/api/nhl/games/${date}`);
    const data = await res.json();

    // safe mapping to prevent undefined errors
    const games = Array.isArray(data.games) ? data.games : [];
    return games;
  } catch (err) {
    console.error("Error fetching games from backend:", err);
    return [];
  }
};