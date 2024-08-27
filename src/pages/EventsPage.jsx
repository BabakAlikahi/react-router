import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "ev1",
    title: "this is event1",
  },
  {
    id: "ev2",
    title: "this is event2",
  },
  {
    id: "ev3",
    title: "this is event3",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
