import { useRoutes } from "react-router";
import "./App.css";
import Forside from "./pages/forside";
import QA from "./pages/QA"
import Products from "./pages/products";
import Medlem from "./pages/medlem"
import Navigation from "./components/navigation/navigation";
import PageFooter from "./components/pageFooter/pageFooter";

function App() {

   const routes = useRoutes([
    { path: "/", element: <Forside /> },
    { path: "/QA", element: <QA /> },
    { path: "/products", element: <Products /> },
    { path: "/medlem", element: <Medlem /> },

  ]);

  return (
    <>
      <Navigation />
      <main>{routes}</main>
      <PageFooter />
    </>
  );
}

export default App;

