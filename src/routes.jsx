import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Chats from "./components/Chats";

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
          { path: "/", element: <Chats /> },
          { path: "/chats", element: <Chats /> },
          { path: "/friends", element: <Friends /> },
          { path: "/profile", element: <Profile /> },
        ],
      },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
];

export default routes;
