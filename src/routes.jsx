import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
];

export default routes;
