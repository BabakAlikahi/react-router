import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import EditEventPage from "./pages/EditEventPage";
import EventsRootLayout from "./pages/EventsRootLayout";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { eventDetailLoader } from "./pages/EventDetailPage";
import { NewEventAction } from "./components/EventForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                {
                  path: "edit",
                  action: NewEventAction,
                  element: <EditEventPage />,
                },
              ],
            },

            {
              path: "new",
              action: NewEventAction,
              element: <NewEventPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
