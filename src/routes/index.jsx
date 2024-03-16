import Layout from "../components/Products/layout1/layout/layout";
import Error from "../components/jsUtils/error/Error";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <>Landing Page</>,
      },
    ],
  },
];

export default routes;
