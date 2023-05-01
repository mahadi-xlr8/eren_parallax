import React, { Component } from "react";
import "./index.css";
import { Parallax } from "react-scroll-parallax";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="temp"></div>
        <section className="human">
          <div className="description">
            <h2>エレン・イェーガー Eren Yēgār</h2>
            Eren Yegar was a former member of
            the Survey Corps. He was the main protagonist of Attack on Titan. He
            lived in Shiganshina District with his parents until the fall of
            Wall Maria, where he impotently witnessed his mother being eaten by
            a Titan. This event would lead to Eren's intense hatred towards
            the Titans as he swore to wipe all of them off the face of the
            Earth.
          </div>
          <div className="image">
            <Parallax
              translateY={["0px", "650px"]}
              translateX={[0, -120]}
              startScroll={0}
              endScroll={500}
              opacity={[1, 0]}
              rotate={[0, 360]}
              scale={[1, 1.2]}
              className="parallax"
            >
              <img src="/eren_human.png" alt="" className="img_human" />
            </Parallax>

            <Parallax
              translateY={["0px", "650px"]}
              translateX={[0, -100]}
              startScroll={0}
              endScroll={500}
              opacity={[0, 1]}
              rotate={[0, 360]}
              scale={[1, 1.2]}
              easing= {[1, -0.75, 0.5, 1.34]}
            >
              <img src="/eren_titan.png" alt="" className="img_titan" />
            </Parallax>
          </div>
        </section>
        <section className="titan">
          <div className="image"></div>
          <div className="description">
            This is also him. Whenever he bites himself he becomes a deadliest <span>Titan.</span>
          </div>
        </section>
        <div className="temp"></div>
      </div>
    );
  }
}

export default Home;
