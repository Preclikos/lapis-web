import "./App.css";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <IntlProvider locale="cs" defaultLocale="en">
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />{" "}
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
