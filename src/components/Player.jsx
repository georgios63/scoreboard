const Player = (props) => {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
    // console.log(props);
    // console.log(props.incrementScore(props.id));
  };

  return (
    <li className="Player">
      <p>
        {props.name} (score {props.score})
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
};

export default Player;
