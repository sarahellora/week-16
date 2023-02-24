import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom'

const Banner = (props) => {
    const {color,message, showLink,linkMessage} = props
    return (
      <>
         <Alert variant={color}>
         {message}
            {showLink &&
         <Alert.Link as={Link} to="/">{linkMessage}</Alert.Link>}
        </Alert>
      </>
    );
  }
  
  export default Banner;