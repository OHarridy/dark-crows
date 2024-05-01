import TheBAR from "./TheBAR.jsx";
import ThisThing from "./singleThing.jsx";
const Home = () => {

    return (
        <div className="home min-h-screen w-screen flex flex-col items-end mx-auto" >
            <TheBAR/>
            <div className="h-[1000px] w-full"></div>
            <div className="home min-h-screen flex flex-col items-center mx-auto" style={{width:1400}}>                
                <ThisThing/>
            </div>
            </div>
    )
}
export default Home;