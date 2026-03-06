import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>EatClub</div>,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
