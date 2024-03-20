import { useNavigate } from "react-router-dom";
import { useParticipantList } from "../state/hooks/useParticipantList";

import './Footer.css'

const Footer = () => {
  const participants = useParticipantList();

  const navigateTo = useNavigate();

  const start = () => {
    navigateTo("/draw");
  };

  return (
    <footer className="footer-config">
      <button
        className="button"
        disabled={participants.length < 3}
        onClick={start}
      >
        Start game
      </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
