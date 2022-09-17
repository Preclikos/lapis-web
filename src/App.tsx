import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import {
  importMessages,
  IntlProvider,
  LocaleMessages,
  SupportedLocales,
} from './translations/intlHelpers';
import { useEffect, useState } from 'react';
import SignIn from './pages/signin';
import SignOut from './pages/signout';
import Profile from './pages/profile';
import TermsAndConditions from './pages/terms';
import Lapis from './pages/lapis';

function App() {
  const locale = navigator.languages[0].substring(0, 2) as SupportedLocales;
  const [messages, setMessages] = useState<LocaleMessages | null>(null);

  useEffect(() => {
    importMessages(locale).then(setMessages);
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/lapis/:id" component={Lapis} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />

          <Route path="/terms" component={TermsAndConditions} />
        </Switch>
      </Router>
    </IntlProvider>
  ) : null;
}

export default App;
