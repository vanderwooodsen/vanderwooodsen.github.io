import React, { useState } from "react";
import { motion } from "framer-motion"


function Skill(props){
  let className = props.className;
  let id = props.id;

  let [clicked, setClicked] = useState(false);

  let animate = {
    scale: [1, 1.2,  1,],
    rotate: [0, 12, -12, 12, 0],

  }

  return <div>
    <motion.i className={className + " select-none"} id={id}
    onClick={()=>setClicked(true)}
    onAnimationComplete={()=>setClicked(false)}
    transition={{ ease: "linear", duration: 0.4 }}
    animate={clicked ? animate : {}}></motion.i>
  </div>
}

function Skills() {
    return (
      <div id="skills" className="container grid grid-cols-12 pt-8 lg:pt-12">
      <div id="body_skills" className="border-box px-4 rounded-xl col-span-full md:col-span-8 md:col-start-3">
        <div className="body_skills flex justify-center">
          <article id="skills" className="md:text-3xl text-2xl skills pt-6 lg:pt-8 pb-6 lg:pb-6">Tehnical skills</article>
        </div>

        <div className="icons grid grid-cols-4 lg:grid-cols-6 lg:pb-8 text-5xl md:text-7xl leading-normal pb-5 select-none">
          <Skill className=" devicon-react-original-wordmark colored"/>
          <Skill className="devicon-javascript-plain colored"/>
          <Skill className="devicon-nodejs-plain-wordmark colored node"/>
          <Skill className=" devicon-jquery-plain-wordmark colored"/>
          <Skill className=" devicon-express-original-wordmark text-white"/>
          <Skill className=" devicon-redux-original colored"/>
          <Skill className=" devicon-sequelize-plain-wordmark text-blue-400 sizing"/>
          <Skill id="postgres" className=" devicon-postgresql-plain-wordmark"/>
          <Skill className=" devicon-github-original-wordmark text-gray-50"/>
          <Skill className=" devicon-git-plain-wordmark colored"/>
          <Skill id="mysql" className=" devicon-mysql-plain-wordmark"/>
          <Skill className=" devicon-heroku-plain-wordmark colored"/>
          <Skill className=" devicon-travis-plain-wordmark colored "/>
          <Skill className=" devicon-firebase-plain-wordmark colored"/>
          <Skill className=" devicon-css3-plain-wordmark colored"/>
          <Skill className=" devicon-html5-plain-wordmark colored"/>
          <Skill className=" devicon-materialui-plain colored"/>
          <Skill className=" devicon-bootstrap-plain-wordmark colored"/>
          <Skill className=" devicon-bulma-plain colored"/>
          <Skill className=" devicon-tailwindcss-original-wordmark colored sizing"/>
          <Skill id="mocha" className=" devicon-mocha-plain"/>
          <Skill className=" devicon-linux-plain text-gray-200"/>
          <Skill className=" devicon-illustrator-plain colored" />
          <Skill id="xd" className=" devicon-xd-plain"/>
        </div>
      </div>
      </div>
    );
  }

export default Skills;
