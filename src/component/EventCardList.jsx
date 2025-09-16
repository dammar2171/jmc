import EventCard from "./EventCard";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
const EventCardList = () => {
  const eventData = [
    {
      id: 1,
      image: event1,
      title: "Aug 17,2025",
      description:
        "A grand program honored +2 graduates and presented bachelor courses and enrollment drive.",
    },
    {
      id: 1,
      image: event2,
      title: "Jul 12,2025",
      description:
        "Congratulations to the winners of the district-level essay competition organized by N-PABSON Kanchanpur.",
    },
    {
      id: 3,
      image: event3,
      title: "Mar 21,2025",
      description:
        "Financial literacy program held with dignitaries; college thanked Nepal Securities Board.",
    },
    {
      id: 3,
      image: event4,
      title: "Sep 26,2024",
      description:
        "Janjyoti Campus defeated CSIT Tigers by 26 runs in T20 Cup congratulations to all players",
    },
  ];
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-4 gy-4">
          {eventData.map((item) => (
            <div className="col-md-4" key={item.id}>
              <EventCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventCardList;
