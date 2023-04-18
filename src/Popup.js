import React from "react";
import "./styles.css";
import { Outlet, Link } from "react-router-dom";

export default function Popup(props) {
  return (
    <div className={props.close >= 0 ? "popup" : "nopopup"}>
      <div>
        <button onClick={props.onclick} className="popup_close">
          x
        </button>
        <iframe
          className="popup_video"
          key={props.video}
          src={props.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1>{props.heading}</h1>
        <p>{props.about}</p>
        <Link to={`/watchnow/${encodeURIComponent(props.video)}`}>
          <button className="popup_watch_now">Watch Now</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
