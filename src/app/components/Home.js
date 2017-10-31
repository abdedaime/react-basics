import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            status:0
        };
        setTimeout(()=>{this.setState({
            status:this.state.status+1
        });},3000);
    }

    onMakeOlder(){
        this.setState({
            age:this.state.age+3
        });
    }



    render(){
       var text="Something!";
        return(
          <div>
          <p>{text}</p>
           <p>Your Name is {this.props.name}, Your age is {this.state.age} </p>
              <p>Status: {this.state.status}  </p>
              <p>  User Name : {this.props.user.name} </p>
              <div>
                 <h4>Hobbies</h4>
                  <ul>{this.props.user.hobbies.map((hoppy,i)=><li key={i}>{hoppy}</li>)}</ul>
              </div>
              <button  onClick={()=>this.onMakeOlder()}  className="primary btn-primary btn-large" >Increase Age</button>
             <hr/>
              <button  onClick={this.props.greet}  className="primary btn-primary btn-large" >Hello</button>
          </div>
        );

    }
}
/*
 {this.onMakeOlder.bind(this)}
Home.propTypes={
 name: React.PropTypes.string,
    age: React.PropTypes.number,
    user:React.PropTypes.object
};*/

