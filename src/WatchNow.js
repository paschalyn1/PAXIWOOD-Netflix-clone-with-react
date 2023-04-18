import React from "react";
import "./styles.css";
import { Link, Outlet, useParams } from "react-router-dom";

export default function WatchNow(props) {
  const params = useParams();

  return (
    <div className="watchnow">
      <Link to="/">
        <button className="watchnow_close">x</button>
      </Link>
      <iframe
        // className="watchnow_video"
        key={params.source}
        src={decodeURIComponent(params.source)}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Outlet />
      {console.log(params.source)}
    </div>
  );
}
