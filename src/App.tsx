import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { RestaurantList } from "@/routes/RestaurantList";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <RestaurantList /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
