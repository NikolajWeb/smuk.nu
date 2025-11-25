import "./App.css";
import Forside from "./pages/forside";
import Navigation from "./components/navigation/navigation";
import PageFooter from "./components/pageFooter/pageFooter";

function App() {

  return (
    <>
      <Navigation />
      <Forside />
      <PageFooter />
    </>
  );
}

export default App;