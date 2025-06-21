import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode 是一个帮助我在开发环境下发现潜在问题的工具
  <React.StrictMode>
    {/* BrowserRouter 是React Router提供的一个路由器容器组件 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
