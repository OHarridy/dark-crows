import { useState } from "react";
const View = ({onClick}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <button
            onClick={onClick}
            className="topgear absolute top-[1%] left-[28%] z-10 flex flex-col items-center justify-center w-10 h-10 align-middle text-current overflow-hidden rounded-lg bg-green-500 cursor-pointer border-2 border-green-300 transition duration-300 hover:bg-green-400 active:scale-90"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <img src="https://www.iconninja.com/files/373/812/883/vision-eye-look-watch-see-view-icon.png"></img>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" style="enableBackground:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve"><g><path d="M256,176.9c-82.8,0-150,79.1-150,79.1s67.2,79.1,150,79.1S406,256,406,256S338.8,176.9,256,176.9z M256,302.3   c-25.6,0-46.3-20.7-46.3-46.3s20.7-46.3,46.3-46.3s46.3,20.7,46.3,46.3S281.6,302.3,256,302.3z"/><circle cx="256" cy="256" r="24.1"/></g></svg> */}
        </button>
    );
}
 
export default View;