import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const AppLayout = () => (
    <div className="app">
    {/* Header */}
    <Header />
    {/* Body */}
    <Body />
    {/* Footer */}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
