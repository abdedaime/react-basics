import React from "react";
import { render } from "react-dom";
import  {Header} from "./components/Header";
import  {Home} from "./components/Home";


class App extends  React.Component {
    onGreet(){
        alert("hello");
    }
    render(){
        var user = {
            name: "My Name",
            hobbies:["coding" ,"resolving complex problem"]
        };
      return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                     <Header linkHome="My Home page"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      <Home name={"anna"} initialAge={25} user={user} greet={this.onGreet}>
                          <p>this is paragraph</p>
                      </Home>
                  </div>
              </div>
              </div>
      );
    }
}
render(<App/>,document.getElementById("app"));
