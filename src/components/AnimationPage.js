import { Component } from "react";
import Particles from "react-tsparticles";
import SecondAnimation from "./SecondAnimation";

class Animation extends Component {
  render() {
    return (
      <div id="animation" className="h-screen w-full relative">
        <Particles
          options={{
            background: {
              color: {
                value: "#010b1d",
              },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fullScreen: false,
            particles: {
              color: {
                value: "##8fabc4",
              },
              number: {
                max: 70,
                density: {
                  enable: true,
                  area: 1000,
                },
              },
              links: {
                distance: 140,
                enable: true,
                color: "#bde0fe",
              },
              move: {
                speed: 1.5,
                enable: true,
              },
              size: {
                value: 1,
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 160,
                  duration: 0.8,
                },
              },
            },
          }}
        />
        <SecondAnimation />
      </div>
    );
  }
}
export default Animation;
