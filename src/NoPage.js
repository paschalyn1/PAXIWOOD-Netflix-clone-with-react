import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="nopage">
      <Link to="/">
        <button className="nopage_close">x</button>
      </Link>
      <h1>
        Oops! <span>😔</span>
      </h1>
      <p>
        No movie available. I suggest you try out the latest movies on PAXIWOOD.
      </p>
      <Outlet />
    </div>
  );
}
