import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { importMessages, IntlProvider, LocaleMessages } from "./translations/intlHelpers";
import { useEffect, useState } from "react";
import SignIn from "./pages/signin";

function App() {
  const locale = 'cs'
  const [messages, setMessages] = useState<LocaleMessages | null>(null)

  useEffect(() => {
    importMessages(locale).then(setMessages)
  }, [])

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}  />
          <Route path="/signin" component={SignIn}   />
        </Switch>
      </Router>
    </IntlProvider>
  ) : null;
}

export default App;
