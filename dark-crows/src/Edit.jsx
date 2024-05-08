import { useState } from "react";
const Edit = ({onClick}) => {
    const [isHovered, setIsHovered] = useState(false);
    return ( 

        <button 
        onClick={onClick}
  className="topgear absolute top-[1%] left-[14%] z-10 flex flex-col items-center justify-center w-10 h-10 align-middle text-current overflow-hidden rounded-lg bg-green-500 cursor-pointer border-2 border-green-300 transition duration-300 hover:bg-green-400 active:scale-90"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-icon text-white" viewBox="0 0 1024 1024" version="1.1">
    <path d="M671.053824 253.083648c6.05184 3.01056 13.463552 0.52224 16.47616-5.5296l43.646976-87.740416c3.012608-6.05184 0.524288-13.4656-5.527552-16.474112l-112.308224-55.86944c-6.05184-3.01056-13.4656-0.52224-16.47616 5.5296l-43.649024 87.740416c-3.01056 6.05184-0.52224 13.4656 5.527552 16.474112L671.053824 253.083648z"/>
    <path d="M448.755712 719.599616c4.622336-4.931584 10.866688-13.91616 13.877248-19.968l203.35616-408.778752c3.012608-6.05184 0.524288-13.4656-5.527552-16.474112l-112.310272-55.873536c-6.05184-3.01056-13.463552-0.52224-16.47616 5.5296L329.13408 631.177216c-3.01056 6.05184-6.268928 16.474112-7.241728 23.16288l-32.774144 225.294336c-0.9728 6.688768 2.013184 8.126464 6.63552 3.19488L448.755712 719.599616z"/>
  </svg>
</button>


     );
}
 
export default Edit;