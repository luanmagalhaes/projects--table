import React from "react";
import { Landing } from "./pages/landing";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
