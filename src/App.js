//import React from "react";
import React, { Component } from 'react';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Paper from '@material-ui/core/Paper';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, phone :  "https://www.gizmochina.com/wp-content/uploads/2019/03/motorola-razr-2019-1-500x500.jpg",info: " Motorola Razr (2019) smartphone was launched on 13th November 2019. ... Motorola Razr (2019) is powered by a 2.2GHz octa-core Qualcomm Snapdragon 710 processor. It comes with 6GB of RAM. The Motorola Razr (2019) runs Android 9.0 Pie and is powered by a 2510mAh non-removable battery."},
      { id: 2, value: 0 ,phone : "https://images.macrumors.com/article-new/2017/09/iphonexdesign.jpg",info : "The iPhone 11 is available in six colors: black, white, red, purple, green, and yellow. The iPhone 11 also features a new anodized aluminum finish, which Apple says is more durable. There's also Dolby Vision audio. It's powered by Apple's new A13 Bionic chip, which Apple touts as its faster processor ever." },
      { id: 3, value: 0 ,phone : "https://i.gadgets360cdn.com/products/large/1556860999_635_google_pixel_3a.jpg?downsize=*:180&output-quality=80",info : "Google Pixel smartphone. The Google Pixel is a smartphone that was tested with the Android 7.1 operating system. This model weighs 5 ounces, has a 5 inch touch screen display, 12.3-megapixel main camera, and 8-megapixel selfie camera. It comes with 4GB of RAM"}
    ]
  };
  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if(counters[index].value<0)
    counters[index].value = 0;
    else
    counters[index].value--;

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    //console.log("Delete", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
         
          <Counters
          counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
