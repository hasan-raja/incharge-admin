import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePage from "./routes/UpdatePage";
import Home from "./routes/Home";
import EmployeedetailPage from "./routes/EmployeedetailPage";
import { EmployeeContextProvider } from "./context/EmployeeContext";
const App = () => {
  return (
      <EmployeeContextProvider>
          <div className="container">
      <Router>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employees/:id/update" component={UpdatePage} />
        <Route exact path="/employees/:id" component={EmployeedetailPage} />
        </Switch>
      </Router>
    </div>
      </EmployeeContextProvider>
    
  );
};

export default App;
