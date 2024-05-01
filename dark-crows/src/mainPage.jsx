import TheBAR from "./TheBAR.jsx";
import ThisThing from "./singleThing.jsx";
const Home = () => {

    return (
        <div className="home min-h-screen w-screen flex flex-col items-end mx-auto" >
            <TheBAR/>
            <div className="h-[1000px] w-full"></div>
            <div className="home min-h-screen flex flex-col flex-none items-center mx-auto mt-auto w-[1400px]">
                <ThisThing/>
            </div>
            </div>
    )
}
export default Home;