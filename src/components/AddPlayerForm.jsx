import { useState } from "react";

const AddPlayerForm = (props) => {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New Player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            // console.log("new input .value:", event.target.value);
            setName(event.target.value);
            // console.log(name);
          }}
        />{" "}
        <button onClick={props.addPlayer(name)}>Add</button>
      </p>
    </div>
  );
};

export default AddPlayerForm;
