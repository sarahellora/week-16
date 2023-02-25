import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ToolTip = (props) => {
  const { message, placement, children } = props;
  //children is a built-in prop so I used this to create a wrapper for the tool tip
  return (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            <strong>{message}</strong>.
          </Tooltip>
        }
      >
        {children}
      </OverlayTrigger>
    </>
  );
};

export default ToolTip;
