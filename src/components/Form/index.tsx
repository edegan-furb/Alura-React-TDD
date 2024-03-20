import React, { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

import './styles.css'

const Form = () => {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addList(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <div className="group-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter participant names"
        />
        <button disabled={!name}>Add</button>
      </div>
      {errorMessage && (
        <p className="error alert" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
