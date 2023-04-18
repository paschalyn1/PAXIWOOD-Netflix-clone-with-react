import React from "react";
import "./styles.css";

export default function MovieBox(props) {
  const [hover, setHover] = React.useState(true);
  return (
    <div
      className="moviebox"
      onMouseOver={() => setHover((prev) => false)}
      onMouseOut={() => setHover((prev) => true)}
    >
      <img
        key={props.id}
        className={hover ? "onhover" : "moviebox_img"}
        src={props.img}
        alt="images"
      />
      <h3 className={hover ? "moviebox_text" : "onhover_h3"}>{props.text}</h3>
      <p className={hover ? "moviebox_about" : "onhover_p"}>{props.about}</p>
      <button
        className={hover ? "moviebox_button" : "onhover_button"}
        onClick={props.onclick}
      >
        Watch Trailer
      </button>
    </div>
  );
}
