import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  state = {
    loading: true
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    const { animal, breed, location, description, name } = this.state;

    return this.state.loading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="details">
        <div>
          <h1> {name} </h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt me!</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
