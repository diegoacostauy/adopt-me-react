import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : this.state.hasError ? (
      <h1>
        There was an error with this listing.{" "}
        <Link to="/"> Go back to the homepage</Link>
      </h1>
    ) : (
      this.props.children
    );
  }
}
