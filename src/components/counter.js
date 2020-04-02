import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));


class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  /*renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>

    return ( 
    <ul>
      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>);
  }*/

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   //console.log("Increment Clicked",this);
  //   //console.log();
  //   this.setState({ value: this.state.value + 1 });

  // };


  render() {
    return (
      <div>
        <div>
          <div align="center">
            <img
              src={this.getphone()}
              alt="Iphone"
              height="400"
              width="500"
            ></img>
          </div>
          <div >
            <Paper elevation={3} >
              <Typography align = "center">{this.props.counter.info}</Typography>
            </Paper>
          </div>
        </div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Add to Cart
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove from Cart
        </button>
      </div>
    );
  }
  getphone() {
    return this.props.counter.phone;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value <= 0 ? "Zero" : value;
  }
  notNegative() {
    const { value } = this.props.counter;
    return value <= 0 ? "Zero" : value;
  }
}

export default Counter;
