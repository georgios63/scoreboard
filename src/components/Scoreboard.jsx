import { useState, useEffect } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const compare_score = (player1, player2) => {
  return player2.score - player1.score;
};

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const playersSorted = (players) => {
    const newPLayers = [...players].sort(compare_score);
    setPlayers(newPLayers);
  };

  useEffect(() => {
    playersSorted(players);
  }, []);

  return (
    <div>
      <p>Players Scores</p>
      <ul>
        {players.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
};

export default Scoreboard;
