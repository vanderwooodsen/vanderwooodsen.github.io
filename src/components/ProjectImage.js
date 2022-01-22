import React from 'react';
import Zoom from 'react-medium-image-zoom'


function ProjectImage(props){
  let big = props.big;
  let className =props.className ? props.className : '';
  let small = props.small;
  let width = props.width;


  return <div>
  <div className='md:hidden'>
    <a href={small}>
      <img src={small} className={className} width={width} alt="screenshot"/>
    </a>
  </div>
  <div className='hidden md:block'>
    <Zoom>
    <picture>
      <source media="(min-width: 700px)" srcSet={big} />
      <img srcSet={small} className={className} width={width} alt="screenshot"/>
    </picture>
      </Zoom>
  </div>
  </div>
}



export default ProjectImage;
