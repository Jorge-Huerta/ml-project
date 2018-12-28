import React from "react";
import Home from "./presentationals/Home";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" Component={Home} />
  </Switch>
  //   <Router>
  //     <div>
  //       <Header />
  //       <Route exact path="/" component={Home} />
  //       <Route path="/Login" component={Login} />
  //     </div>
  //   </Router>
  // );
  //
  // const Home = () => <h2>Home</h2>;
  // const Login = () => <h2>Login</h2>;
  //
  // const Header = () => (
  //   <ul>
  //     <li>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/login ">Login</Link>
  //     </li>
  //   </ul>
);

export default App;
