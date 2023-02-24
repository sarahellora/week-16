import Figure from 'react-bootstrap/Figure';

const Image = (props) => {
    const {width,height,imageLink} = props
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