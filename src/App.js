import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
import UpdateRecipe from "./components/UpdateRecipe";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/updateRecipe">
            <UpdateRecipe />
          </Route>
          <Route path="/">
            <Form />
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;