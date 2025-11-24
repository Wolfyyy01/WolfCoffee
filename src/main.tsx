import React from "react";
import ReactDOM from "react-dom/client";
import App from "./scenes/react/App";
import { Provider } from "jotai";
import { store } from "./utils/atoms";

const container = document.getElementById("reactUI");
if (!container) throw new Error('Root element "#reactUI" not found');

const parent = container.parentElement;
if (!parent) throw new Error('Container parent element not found');

new ResizeObserver(() => {
  const scale = Math.min(
    parent.offsetWidth / container.offsetWidth,
    parent.offsetHeight / container.offsetHeight
  );
  document.documentElement.style.setProperty("--scale", String(scale));
}).observe(parent);


ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);
