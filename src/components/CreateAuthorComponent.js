import React from "react";
import "./CreateAuthorComponent.css";

export const CreateAuthorComponent = (props) => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const onNameChange = (event) => setName(event.target.value);

  const onSubmit = () => {
    if (!name) {
      setError("Du måste skriva in ett namn");
      return;
    }
    props.setAuthor(name);
  };

  return (
    <div className="AuthorContainer">
      <div className="CreateAuthor">
        <h1>Skriv in ditt namn:</h1>
        <input value={name} type="text" onChange={onNameChange} />
        {error && <div className="error">{error}</div>}
        <button type="submit" onClick={onSubmit}>
          <h3>LESS GO</h3>
        </button>
      </div>
    </div>
  );
};
