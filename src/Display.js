import React from "react";
import "./styles.css";
import { Outlet, Link } from "react-router-dom";

export default function Display(props) {
  return (
    <div className="display">
      <iframe
        className="display_video"
        key={props.video}
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; 
gyroscope; picture-in-picture; 
web-share"
        allowfullscreen
      ></iframe>
      <div className="display_div">
        <h1>{props.heading}</h1>
        <p>{props.about}</p>
        <Link to={`/watchnow/${encodeURIComponent(props.video)}`}>
          <button>Watch Now</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
