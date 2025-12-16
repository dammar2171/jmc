import EventCardList from "../component/EventCardList";
import PageTop from "../component/PageTop";
import Footer from "../component/Footer";
import ConsultationBanner from "../component/ConsultationBanner";
import noticeBanner from "../assets/NoticeBanner.png";
const Notice = () => {
  return (
    <>
      <PageTop Banner={noticeBanner} />
      <EventCardList />
      <ConsultationBanner />
      <Footer />
    </>
  );
};
export default Notice;
