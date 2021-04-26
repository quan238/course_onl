import React from "react";
// setup Route
import { Route } from "react-router";
import Header from "../components/Header/Header";

export default function HomeTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div>
            {/* Header */}
            <Header />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
