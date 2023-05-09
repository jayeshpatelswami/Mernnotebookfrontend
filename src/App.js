import { React  } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Notestate from "./context/notes/Notestate";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Error404pag from "./component/Error404pag";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Notestate>
        <Router>
          <Navbar />
          {/* <div className="container my-4"> */}
            <Switch>
              <Route exact path="/about">   <About />       </Route>
              <Route exact path="/">        <Home />        </Route>
              <Route exact path="/login">   <Login />       </Route>
              <Route exact path="/signup">  <Signup />      </Route>
              <Route exact path="/*">     <> <div className="position-absolute top-50 start-50 translate-middle"> <Error404pag /> </div> </></Route>
            </Switch>
          {/* </div> */}
        </Router>
      </Notestate>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
