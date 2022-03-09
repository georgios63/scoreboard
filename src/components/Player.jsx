const Player = (props) => {
  return (
    <li className="Player">
      <p>
        {props.name} (score {props.score})
      </p>
    </li>
  );
};

export default Player;
