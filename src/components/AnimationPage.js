import { Component } from 'react';
import {useSpring, animated} from 'react-spring'
import Particles from "react-tsparticles";


class Animation extends Component{
  render(){
    return(
      <div id="animation">
      <Particles
        options={{
          fullScreen: false,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 160,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#bde0fe",
            },
            links: {
              color: "#bde0fe",
              distance: 170,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
    />
      </div>
    )
  }
}
export default Animation;
