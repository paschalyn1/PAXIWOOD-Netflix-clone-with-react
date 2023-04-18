import "./styles.css";
import React from "react";
import MovieBox from "./MovieBox.js";
import Display from "./Display";
import { data } from "./Data.js";
import Footer from "./Footer.js";
import Popup from "./Popup";

export default function App() {
  const [show, setShow] = React.useState("0");
  const rand = Math.floor(Math.random() * data.length);

  const styles = {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: "20px",
    padding: "20px"
  };

  return (
    <div>
      <h1 className="logo">PAXIWOOD</h1>
      {show === data[show].id && (
        <Popup
          video={data[show].video}
          heading={data[show].text}
          about={data[show].about}
          close={show}
          onclick={() => setShow("0")}
        />
      )}

      <Display
        video={data[rand].video}
        heading={data[rand].text}
        about={data[rand].about}
      />

      <h3 style={styles}>Latest Release</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "latest")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow(f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>Romantic Movies</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "romance")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>Stand-up Comedies</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "stand-up comedies")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>Horror Movies</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "horror")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>Nollywood Movies</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "nollywood")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>Goofy Movies</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "goofy")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <h3 style={styles}>For Kids & Family</h3>
      <div className="movies">
        {data
          .filter((file) => file.category === "for kids & family")
          .map((f) => (
            <MovieBox
              id={f.id}
              onclick={() => setShow((prev) => f.id)}
              img={f.img}
              text={f.text}
              about={f.about}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
}

// The slider for the movies
//responsive design
