import Home from "./Pages/Home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
