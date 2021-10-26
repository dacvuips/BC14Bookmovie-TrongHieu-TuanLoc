import React, { Component } from "react";

export default class DashboarPage extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <marquee
            className="text-center"
            behavior="scroll"
            direction="up"
            scrollamount="1"
          >
            <h3>Chào mừng thầy và các mentor đã vào trang Admin</h3>
          </marquee>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X-pm8cQeBQA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </>
    );
  }
}
