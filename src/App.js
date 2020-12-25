import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Drivers from "./Components/Drivers/Drivers";
import Main from "./Components/Main/Main";
import "./fonts/fonts.css";
import Contacts from "./Components/Contacts/Contacts";
import Bonus from "./Components/Bonus/Bonus";
import { Route, Redirect } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
    };
  }
  callAPI() {
    fetch("http://localhost:7000/testApi")
      .then((res) => res.json())
      .then((res) => {
        this.setState(function (state, props) {
          return {
            apiResponse: [...res],
          };
        });
      });
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    console.log(this.state.apiResponse);
    let line = this.state.apiResponse;
    return (
      <div className="app-wrapper">
        <Header />
        {/* <p>
          {" "}
          {line.map((line) => (
            <div>{line.name + line.fuel}</div>
          ))}
        </p> */}
        <div className="app-wrapper-content">
          <Redirect exact from="/" to="/main" />
          <Route path="/main" component={() => <Main prices={line} />} />
          <Route path="/about" component={About} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/bonus" component={Bonus} />
          <Route path="/contacts" component={Contacts} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
