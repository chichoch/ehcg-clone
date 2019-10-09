import React from 'react';

export const CreateAuthorComponent = (props) => {
  const [name, setName] = React.useState('');

  const onNameChange = event => setName(event.target.value);

  const onSubmit = () => {
    props.setAuthor(name);
  }

  return (
    <div className="CreatePost">
      <h1>Skriv in ditt namn:</h1>
      <input value={name} type="text" onChange={onNameChange} />
      <button
        type="submit"
        onClick={onSubmit}
      >
        <h3>LESS GO</h3>
      </button>
    </div>
  )
}