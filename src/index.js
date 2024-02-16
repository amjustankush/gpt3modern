// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// In React 18, concurrent mode is the default, so no explicit mode setting is needed.

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
