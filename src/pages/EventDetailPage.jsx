import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function eventDetailLoader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch event detail. Please try again later",
      },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
    // return response
  }
}
