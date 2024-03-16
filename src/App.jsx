import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";
import "./assets/scss/_abstracts.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
