import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsum
          ad aperiam explicabo facilis rerum quidem soluta tempore, distinctio
          earum similique animi iusto. Sint quae facilis error obcaecati
          quisquam quia nemo odit doloribus. Ipsam, atque laborum, ratione
          repellendus eveniet ut quibusdam, corporis distinctio illo in aliquam
          incidunt expedita doloremque laudantium?
        </p>
      </div>
    </div>
  );
}

export default About;
