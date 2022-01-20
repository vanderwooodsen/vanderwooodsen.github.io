import React, { Component } from "react";
import MobileNavBar from './MobileNavbar';
import { FaTwitter, FaBehanceSquare, FaGithub, FaLinkedin, FaInstagramSquare, FaHome} from 'react-icons/fa';
import { IoIosMenu } from "react-icons/io";


class NavBar extends Component {
   constructor(props) {
      super(props);

      this.body = document.getElementsByTagName('body')[0];

      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
      this.handleClickAway =this.handleClickAway.bind(this);
      this.handleLinkClick =this.handleLinkClick.bind(this);
    }

    _onButtonClick(event) {
      event.stopPropagation();
      this.setState({
        showComponent: true,
      });
      this.body.classList.add("overflow-hidden");
    }

    handleClickAway = (event) => {
      event.stopPropagation();
		this.setState({
         showComponent: false,
      })
      this.body.classList.remove("overflow-hidden");
	};

   handleLinkClick = (event) => {
		this.setState({
         showComponent: false,
      })

      this.body.classList.remove("overflow-hidden");
	};


   render(){
   return (
      <div>
         <div>
            <button id="menuBtn" onClick={this._onButtonClick} className={"z-500 overscroll-auto fixed lg:hidden flex px-2 py-1 ml-3 mt-3 md:px-4 md:py-3 md:ml-4 md:mt-4 text-white rounded font-bold hover:text-white hover:border-blue-400 appearance-none focus:outline-none " + (this.state.showComponent ? " hidden" : '')}>
                <IoIosMenu className="text-2xl md:text-3xl" />
            </button>
         </div>

         <MobileNavBar visible={this.state.showComponent} clickAway={this.handleClickAway} linkClick={this.handleLinkClick}/>

         <nav id="navbar" className={"lg:fixed w-full z-10 top-0 "}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                  <div className="pl-4 flex items-center">
                  </div>

               <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden mt-2 lg:mt-0 z-20" id="nav-content">
                  <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
                  <ul className="list-reset lg:flex justify-end items-center">
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block py-2 px-4 text-gray-50 hover:text-blue-500 font-bold no-underline" target="_blank" rel="noreferrer" href="//www.linkedin.com/in/christidev/"><FaLinkedin/></a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 hover:text-gray-500 hover:underline py-2 px-4" target="_blank" rel="noreferrer" href="//github.com/vanderwooodsen"><FaGithub/></a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 hover:text-yellow-500 hover:underline py-2 px-4" target="_blank" rel="noreferrer" href="//www.behance.net/christine_tsiupa"><FaBehanceSquare/></a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 hover:text-blue-400 hover:underline py-2 px-4" target="_blank" rel="noreferrer" href="//twitter.com/christicodes"><FaTwitter/></a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 hover:text-pink-500 hover:underline py-2 px-4" target="_blank" rel="noreferrer" href="//www.instagram.com/christis_creations_/"><FaInstagramSquare/></a>
                     </li>
                  </ul>
                  </div>
                  <ul className="list-reset lg:flex justify-end items-center">
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="navHover inline-block py-2 px-4 text-gray-50 no-underline" href="#animation"><FaHome/></a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 no-underline navHover py-2 px-4" href="#about_me">About me</a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 no-underline navHover py-2 px-4" href="#skills">Skills</a>
                     </li>
                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 no-underline navHover py-2 px-4" href="#projects">Projects</a>
                     </li>

                     <li className="mr-3 py-2 lg:py-0">
                        <a className="inline-block text-gray-50 no-underline navHover py-2 px-4" href="#contactMe">Contact Me</a>
                     </li>

                  </ul>
               </div>
            </div>
         </nav>

      </div>
   );
   }
}

export default NavBar;
