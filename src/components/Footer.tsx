import { useNavigate } from "react-router-dom";
import { useParticipantList } from "../state/hooks/useParticipantList";

const Footer = () => {
  const participants = useParticipantList();

  const navigateTo = useNavigate();

  const start = () => {
    navigateTo("/draw");
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={start}>
        Start game
      </button>
    </footer>
  );
};

export default Footer;
