import React from "react";
import ReactDOM from "react-dom/client";

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
    <h1 className="text-red-700 ">Hello, React with Tauri and Kaply!</h1>
  </React.StrictMode>
);
