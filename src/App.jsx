import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsRootLayout from "./pages/EventsRootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            { index: true, element: <EventsPage /> },
            { path: ":eventId", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":eventId/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
