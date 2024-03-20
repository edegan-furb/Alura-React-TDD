import { useState } from "react";
import { useParticipantList } from "../state/hooks/useParticipantList";
import { useDrawResult } from "../state/hooks/useDrawResult";
import Card from "../components/Card";

import "./Draw.css";

const Draw = () => {
  const participants = useParticipantList();

  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretSanta, setSecretSanta] = useState("");

  const result = useDrawResult();

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(currentParticipant)) {
      setSecretSanta(result.get(currentParticipant)!);
    }
  };

  return (
    <Card>
      <section className="draw">
        <h2>Who will go first</h2>
        <form onSubmit={draw}>
          <select
            required
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Select your name"
            value={currentParticipant}
            onChange={(event) => setCurrentParticipant(event.target.value)}
          >
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <button className="draw-button">draw</button>
        </form>
        {secretSanta && (
          <p className="result" role="alert">
            {secretSanta}
          </p>
        )}
        <footer className="draw">
          <img
            src="/images/aviao.png"
            className="plane"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Draw;
