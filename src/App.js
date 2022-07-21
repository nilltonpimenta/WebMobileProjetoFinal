import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contato from "./components/pages/Contato";
import Itinerarios from "./components/pages/itinerarios";
import Inicio from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route path="/itinerarios">
          <Itinerarios />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
