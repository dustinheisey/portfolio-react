import React, { Component } from "react";
import Avatar from "../../assets/avatar.svg";
class CardAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: 1,
      subtitleText: "I design mobile first websites."
    };

    this.onInterval = this.onInterval.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(this.onInterval, 3000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onInterval() {
    switch (this.state.subtitle) {
      case 1:
        this.setState({
          subtitle: 2,
          subtitileText: "I develop attractive user experiences."
        });
        break;
      case 2:
        this.setState({
          subtitle: 3,
          subtitleText: "I keep user and client data safe."
        });
        break;
      case 3:
        this.setState({
          subtitle: 4,
          subtitleText: "I optimize everything."
        });
        break;
      case 4:
        this.setState({
          subtitle: 5,
          subtitleText: "I create native-like web apps."
        });
        break;
      case 5:
        this.setState({
          subtitle: 1,
          subtitileText: "I design mobile first websites."
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <section className="border-r-lg bg-l shadow margin-tb-lg display-f direction-c align-c about-image">
        <img
          src={Avatar}
          alt="About Me"
          className="width-p-lg height-a border-r-tl-lg border-r-tr-lg"
        />
        <div className="padding-lg">
          <h2 className="margin-b-lg">Hey, My Name is Dustin Heisey</h2>
          <p className="margin-b-lg color-m">{this.state.subtitleText}</p>
        </div>
      </section>
    );
  }
}

export default CardAbout;
