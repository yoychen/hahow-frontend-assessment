import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";

function App() {
  return <div className="App" />;
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
