import "./index.css";
import Custom404 from "./pages/notFound";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    {
      path: "/not-found",
      element: <Custom404 />,
    },
  ]);

  return <div>{routes}</div>;
}

export default App;
