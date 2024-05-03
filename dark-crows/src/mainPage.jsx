import TheBAR from "./TheBAR.jsx";
import ThisThing from "./singleThing.jsx";
const Home = () => {

    return (
        <div className="home min-h-screen w-screen flex flex-col items-start mx-auto" >
            <TheBAR/>
            <div className="h-[2000px] w-full"></div>
            <div className="home min-h-screen flex flex-col flex-none items-start mx-auto mt-auto w-[1400px]">
                <ThisThing/>
            </div>  
            </div>
    )
}
export default Home;