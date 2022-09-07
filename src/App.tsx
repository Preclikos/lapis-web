import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { importMessages, IntlProvider, LocaleMessages, SupportedLocales } from "./translations/intlHelpers";
import { useEffect, useState } from "react";
import SignIn from "./pages/signin";
import SignOut from "./pages/signout";

function App() {
  const locale = navigator.languages[0].substring(0, 2) as SupportedLocales;
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
          <Route path="/signout" component={SignOut}   />
        </Switch>
      </Router>
    </IntlProvider>
  ) : null;
}

export default App;
