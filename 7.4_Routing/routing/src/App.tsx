import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Hello from "./components/Hello";
import Error404 from './components/Error404';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/dashboard" children={<Dashboard />} />
          <Route path="/hello/:nameProperty" children={<Hello />} />
          <Route path="/404" children={<Error404 />} />
          <Route path="*" children={<Error404 />} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}