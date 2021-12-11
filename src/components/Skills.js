import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container grid grid-cols-12">
      <div id="body_skills" className="box-border px-4 rounded-xl col-span-full md:col-span-8 md:col-start-3">
        <div className="flex justify-center">
          <article className="skills">Tehnical skills</article>
        </div>

        <div className="icons grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <i className="devicon-react-original-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div>
            <i className="devicon-nodejs-plain-wordmark colored node sizing"></i>
          </div>
          <div>
            <i className="devicon-jquery-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-express-original-wordmark text-white sizing"></i>
          </div>
          <div>
            <i className="devicon-redux-original colored"></i>
          </div>
          <div>
            <i
              id="sequel"
              className="devicon-sequelize-plain-wordmark text-blue-400 sizing"
            ></i>
          </div>
          <div>
            <i id="postgres" className="devicon-postgresql-plain-wordmark"></i>
          </div>
          <div>
            <i className="devicon-github-original-wordmark text-gray-50"></i>
          </div>
          <div>
            <i className="devicon-git-plain-wordmark colored"></i>
          </div>
          <div>
            <i id="mysql" className="devicon-mysql-plain-wordmark"></i>
          </div>
          <div>
            <i className="devicon-heroku-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-travis-plain-wordmark colored sizing"></i>
          </div>
          <div>
            <i className="devicon-firebase-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-css3-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-html5-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-materialui-plain colored"></i>
          </div>
          <div>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
          </div>
          <div>
            <i className="devicon-bulma-plain colored"></i>
          </div>
          <div>
            <i className="devicon-tailwindcss-original-wordmark colored sizing"></i>
          </div>
          <div>
            <i id="mocha" className="devicon-mocha-plain"></i>
          </div>
          <div>
            <i className="devicon-linux-plain text-gray-200"></i>
          </div>
          <div>
            <i className="devicon-illustrator-plain colored"></i>
          </div>
          <div>
            <i id="xd" className="devicon-xd-plain"></i>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Skills;
