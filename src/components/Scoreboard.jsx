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

  const [sortMethod, setSortMethod] = useState("score");

  const sortedByScore = (players) => {
    const newPLayers = [...players].sort(compare_score);
    setPlayers(newPLayers);
  };

  const sortedByName = (players) => {
    const arraySortedByName = [...players].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setPlayers(arraySortedByName);
  };

  const incrementScore = (id) => {
    // console.log(id);
    // console.log(players);
    const addedScore = [...players].map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });

    setPlayers(addedScore);
  };

  const resetScore = () => {
    // console.log(...players);
    const resetScores = [...players].map((player) => {
      return { ...player, score: 0 };
    });
    setPlayers(resetScores);
  };

  //To do
  // const addPlayer = (name) => {
  //   const newPlayer = [
  //     ...players,
  //     {
  //       id: Math.random,
  //       name,
  //       score: 0,
  //     },
  //   ];
  //   setPlayers(newPlayer);
  // };

  useEffect(() => {
    sortMethod === "score" ? sortedByScore(players) : sortedByName(players);
  }, [sortMethod]);

  useEffect(() => {}, []);

  return (
    <div>
      <p>Players Scores</p>
      <ul>
        <button onClick={resetScore}>Reset</button>
        {players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <select onChange={(e) => setSortMethod(e.target.value)}>
        <option value="score">score</option>
        <option value="name">name</option>
      </select>
      {/* <AddPlayerForm addPlayer={addPlayer} /> */}
    </div>
  );
};

export default Scoreboard;
