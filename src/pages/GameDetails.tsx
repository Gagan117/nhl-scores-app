import { useParams } from "react-router-dom";

export default function GameDetails() {
  const { id } = useParams();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Game Details</h1>
      <p className="text-gray-300">Details for game ID: {id}</p>
    </div>
  );
}