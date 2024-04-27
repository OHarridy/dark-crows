import ThisThing from "./singleThing.jsx";
const Home = () => {
    return (
        <div className="home min-h-screen flex items-end mx-auto" style={{width:1400}}>

            <div className="flex flex-col">
                <div className="h-[700px] w-[1000px]">
                </div>
                <ThisThing/>
            </div>
        </div>
    )
}
export default Home;