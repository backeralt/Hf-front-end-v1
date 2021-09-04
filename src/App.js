
import Layout from './components/Layout.jsx';
import SignUp from './components/header/elements/SignUp.js';
import Membership from './components/header/elements/Membership.js';
import LogIn from './components/header/elements/LogIn.js';
import MembershipForm from './components/header/elements/MembeshipForm.js';
import ForgotPassword from './components/header/elements/ForgotPassword.js';
import { Route, Switch } from "react-router";
import MembershipPage from './components/header/elements/MembershipPage.js';

function App() {
  return (
    <div >
    <Switch>
          <Route path="/" exact>
            <Layout />
          </Route>
          <Route path="/forgotpassword">
          <ForgotPassword />
          </Route>
          <Route path="/membershipform">
            <MembershipForm/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/membership">
            <Membership />
          </Route>
        <Route path="/membershippage">
            <MembershipPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;