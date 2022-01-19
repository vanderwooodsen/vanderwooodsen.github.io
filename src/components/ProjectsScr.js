import React, {useState} from 'react';
import {Zoom, ControlledZoom} from 'react-medium-image-zoom/dist/styles.css'
/*

function Image(props){
  let srcSet = props.srcSet;
  let className =props.src

  let [isZoomed, setIsZoomed] = useState(false);

  let animate  = {
      width: 300,
      height: 300,
      borderRadius: '50%',
      backgroundColor: '#0099ff'
  }

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return <div>
  <Zoom>
  <picture>
    <source media="(max-width: 800px)" srcSet="/path/to/teAraiPoint.jpg" />
    <img srcSet={srcSet} className={className} alt="screenshot"
    onClick={()=>isZoomed(true)}
    onAnimationComplete={()=>setIsZoomed(false)}
    transition={{ ease: "linear" }}
    animate={clicked ? style : {}}></img>
    </picture>
    </Zoom>
  </div>
}


function ProjectsScr(){
  return(
    <div className="justify-center grid md:grid-cols-4 md:gap-2 grid-cols-2 gap-2">
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <Image srcSet="./scrshotsOfprojects/uniweb1.png" className="h-24"></Image>
          <Image src="./scrshotsOfprojects/uniweb2.png" className="h-24"></Image>
          <Image src="./scrshotsOfprojects/uniweb3.png" className="h-24"></Image>
          <Image src="./scrshotsOfprojects/uniweb4.png" className="h-24"></Image>
      </ControlledZoom>
    </div>
  )
}

export default ProjectsScr;
*/
