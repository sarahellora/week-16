import Figure from 'react-bootstrap/Figure';

const Image = (props) => {
    const {width,height,imageLink} = props
    //passing just props to make it reuseable
    return (
    <Figure>
      <Figure.Image
        width={width}
        height={height}
        src={imageLink}
      />
    </Figure>
  );
}

export default Image