import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { RestaurantList } from "@/routes/RestaurantList";
import { RestaurantDetailPage } from "@/routes/RestaurantDetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <RestaurantList /> },
      { path: "/restaurant/:id", element: <RestaurantDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
