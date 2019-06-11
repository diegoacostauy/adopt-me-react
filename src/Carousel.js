import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = ev => {
    this.setState({
      active: Number(ev.target.dataset.index)
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              key={photo}
              onClick={this.handleIndexClick}
              onKeyUp={this.handleIndexClick}
              data-index={i}
              src={photo}
              className={i == active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
