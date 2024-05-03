import {Button} from "@nextui-org/react";

function generalButton ({text ,onClick ,className, type}) {
    return (  
  <Button onClick={onClick} className={className} style={{backgroundColor: "#28c95a" , color:"white "}} type={type}>
    {text}
  </Button>

  
);
}
 
export default generalButton;