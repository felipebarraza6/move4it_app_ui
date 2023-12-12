import "./assets/css/App.css";
import Home from "./containers/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/profile_user",
        },
        {
          path: "/blog",
        },
        {
          path: "/profile_competition",
        },
        {
          path: "team",
        },
        {
          path: "enterprise",
        },
        {
          path: "challenges",
        },
        {
          path: "achievements",
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
