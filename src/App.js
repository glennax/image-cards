import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Card>
      <AnimationIndicator />
      <Image />
      <Stats />
    </Card>
  );
}

// Card
class Card extends React.Component {
  render() {
    return <div className="card"></div>;
  }
}

//Animation Indicator
class AnimationIndicator extends React.Component {
  render() {
    return <div className="gif-target">[GIF]</div>;
  }
}

//Image
class Image extends React.Component {
  render() {
    return <div className="preview"></div>;
  }
}
//Stats
class Stats extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-item">views</div>
        <div className="footer-item">likes</div>
        <div className="footer-item">comments</div>
      </div>
    );
  }
}

//Details
class Details extends React.Component {
  render() {
    return (
      <div className="desc">
        <p id="title"></p>
        <p id="description"></p>
        <p id="created-at"></p>
      </div>
    );
  }
}

export default App;
