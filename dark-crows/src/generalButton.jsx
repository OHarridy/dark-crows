import {Button} from "@nextui-org/react";

function generalButton ({text ,onClick}) {
    return (  
    // <div className="buttonContainer">
  <Button onClick={onClick} className="generalButton">
    {text}
  </Button>

  // </div>
  
);
}
 
export default generalButton;