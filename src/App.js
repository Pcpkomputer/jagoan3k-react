import Index from "./pages"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/about">
            <div>
              memek
            </div>
          </Route>
          <Route path="/jagoank3">
            <div>
              asdasdasdasd
            </div>
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
