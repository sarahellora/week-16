import React from 'react';
import Button from "react-bootstrap/Button";


const ScrollButton = (props) => {


  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return <Button type="button" varian="warning" onClick={handleScroll}> 
  </Button>;
}
  export default ScrollButton