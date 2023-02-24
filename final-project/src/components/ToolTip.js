import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ToolTip = (props) => {
  const { message, placement, children } = props;
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
