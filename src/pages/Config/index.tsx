import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ParticipantsList from "../../components/ParticipantList";

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Lets begin!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Config;
