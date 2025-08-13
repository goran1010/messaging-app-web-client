import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Messages from "./components/Messages";
import Groups from "./components/Groups";
import Friends from "./components/Friends";
import Profile from "./components/Profile";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "/", element: <Messages /> },
          { path: "/messages", element: <Messages /> },
          { path: "/groups", element: <Groups /> },
          { path: "/friends", element: <Friends /> },
          { path: "/profile", element: <Profile /> },
        ],
      },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
];

export default routes;
