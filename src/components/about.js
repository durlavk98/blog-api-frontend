import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="mx-32">
        <p className="font-semibold text-lg">
          This blog is part of the 
          <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/blog-api" target="blank"> Blog API </a>
          assignment of
          <a href="https://www.theodinproject.com/" target="blank"> 'The Odin Project' </a> curriculam. It uses
          <a href="https://arcane-caverns-09297.herokuapp.com"> https://arcane-caverns-09297.herokuapp.com </a> api built using nodejs and mongodb. The code of this site is available at <a href="https://github.com/durlavkalita/blog-api-frontend"> this github repo </a>.
        </p>
        <div className="flex justify-around items-center my-16">
        <a href="https://www.theodinproject.com/" target="blank">
          <img src="https://www.theodinproject.com/assets/odin-logo-2d729f16279e9fc3b58ce847eacf07f883bdfc95eb23bb5064ed59d36ef551d6.svg" alt="the-odin-project" width="150"/>
        </a>
        <a href="https://reactjs.org/" target="blank">
          <img src="/logo192.png" alt="reactjs" />
        </a>
        </div>
      </div>
    )
  }
}

export default About
