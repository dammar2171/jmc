import EventCardList from "../component/EventCardList";
import PageTop from "../component/PageTop";
import Footer from "../component/Footer";
import ConsultationBanner from "../component/ConsultationBanner";
import eventBanner from "../assets/event-banner.png";
const Event = () => {
  return (
    <>
      <PageTop Banner={eventBanner} />
      <EventCardList />
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Event;
