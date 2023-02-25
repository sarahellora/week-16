import React from 'react';
import Button from "react-bootstrap/Button";
import { FaArrowDown } from 'react-icons/fa';
import ToolTip from './ToolTip';





const ScrollButton = (props) => {
//created a function to scroll to the end 
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return( 
    <>
    <ToolTip placement="left" message="Scroll To the Bottom">

            <Button type="button" varian="warning" onClick={handleScroll}> 
                <FaArrowDown/>
            </Button>
            </ToolTip>

    </>
  )
}
  export default ScrollButton