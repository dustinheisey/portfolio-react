import React, { Component } from "react";

class CardQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: 1,
      className:
        "border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg " +
        props.addClass
    };

    this.onInterval = this.onInterval.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(this.onInterval, 4000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onInterval() {
    if (this.state.testimonial === 1) {
      this.setState({ testimonial: 2 });
    } else if (this.state.testimonial === 2) {
      this.setState({ testimonial: 1 });
    }
  }

  render() {
    return (
      <section className={this.state.className}>
        <h2 className="margin-b-md">{this.props.title}</h2>

        {this.state.testimonial === 1 ? (
          <div>
            <blockquote cite="http://www.aerialsgymnastics.net">
              <p className="margin-b-md color-m">"{this.props.text1}"</p>
            </blockquote>
            <h4>
              <strong>{this.props.author1}</strong>
            </h4>
          </div>
        ) : (
          <div>
            <blockquote cite="https://www.my-teamgear.com">
              <p className="margin-b-md color-m">"{this.props.text2}"</p>
            </blockquote>
            <h4>
              <strong>{this.props.author2}</strong>
            </h4>
          </div>
        )}
      </section>
    );
  }
}

export default CardQuote;
