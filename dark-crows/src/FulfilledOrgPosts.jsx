import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import OrgDonationPost from "./OrgDonationPost";
import CardPage from "./CardPage";
import Nyet from "./Nyet";
import Edit from "./Edit";
import View from "./ViewAsDonor";
import {Tabs, Tab} from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";

const FulfilledOrgPosts = () => {
    const Navigate = useNavigate();

    function redirect(){
        console.log("PRESSEDDDDD");
        Navigate("/OrgDonationPost2");
    }
    
    function redirect2(){
        console.log("PRESSEDDDDD");
        Navigate("/OrgDonationPost3");
    }

    const photoUrl = localStorage.getItem("photo");
    var [blogs, setBlogs] = useState(
        [ {link: '/OrgDonationPost1',body: 'Kids in Africa are dying of thirst, help us provide clean water for them!',                                             author: 'The Key of Life!',   id: 100, donatedAmount: 1000 ,maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1, source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'                                                                                     ,source2:photoUrl},
            {link: '/OrgDonationPost2',body: "Toys stimulate a child's cognitive abilities, fostering problem-solving, critical thinking, and creativity.",  author: 'Smile Getters', id: 2, donatedAmount: 5000 ,   maximumAmount: 5000 ,   get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2, source: 'https://i0.wp.com/epthinktank.eu/wp-content/uploads/2023/04/EPRS-Briefing-747093-Russia-war-Ukraine-forcibly-displaced-childrent-FINAL.png?fit=1000%2C581&ssl=1&w=640'                                                    ,source2:photoUrl},
        {link: '/OrgDonationPost3',body: 'Some people can not live without an oven others dont know what an oven is.help us provide the standard appliances for them', author: 'House helpers',    id: 3, donatedAmount: 70000 ,   maximumAmount: 70000 ,  get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2, source: 'https://i.pinimg.com/736x/8b/c2/08/8bc208048e0a4d54cf0d255aedb9da0c.jpg',source2:photoUrl},
            
           ]);

 


            function deleteblogs(id){
                const newlist = blogs.filter(blog => blog.id !== id);
                setBlogs(newlist);
                console.log("NEW LIST", newlist);
            }

            function donorNotif(){
                toast.info("A Donor Has responded to one of your posts! ")
            }
            const [selectedTab, setSelectedTab] = useState('Donor');

function handleTabChange() {
  console.log(selectedTab);
}
 
    return (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* card to add new post */}
        <div id='0'>
            <ToastContainer/>
        <Link to="/OrgDonationPost">
        <Card 
                        className="w-[300px] h-[500px] hover:shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out"
                        style={{borderRadius: 0}} isHoverable={true}>

            <button
            title="Add New"
            className="group cursor-pointer outline-none hover:rotate-90 duration-300 mx-auto my-auto  ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200px"
                height="200px"
                viewBox="0 0 24 24"
                className="stroke-lime-400 fill-none group-hover:fill-lime-800 group-active:stroke-lime-200 group-active:fill-lime-600 group-active:duration-0 duration-300 ">
<path
  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
  stroke-width="1.5"
></path>
<path d="M8 12H16" stroke-width="1.5"></path>
<path d="M12 16V8" stroke-width="1.5"></path>
</svg>
</button>

              
    </Card>
    </Link>

    


        </div>

        {blogs.map(blog=> (
            <div id={"blog" + blog.id} className="blog-preview relative group " key={blog.id}>
                
                {/* <Link to={blog.link}> */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-100">

                <Nyet
                                onClick={() => deleteblogs(blog.id)}
                                className="">
                                </Nyet>
                                </div>
                               
                <Card onPress={redirect2}
                isPressable
                            className="w-[300px] h-[500px] hover:shadow-lg
                             transform transition-all duration-200 ease-in-out"
                            style={{borderRadius: 0}} 
                            isHoverable={true}
                            >
                                <div style={{ position: 'relative' }}>
                            <Image
                                radius="none"
                                isZoomed={true}
                                src={blog.source}
                                style={{width: 300, height: 278, borderRadius: 0,
                                    zIndex: 2}}>
                                </Image>
                                </div>


                            <CardHeader className="justify-between pb-0">
                                <Avatar className="mr-3 mb-1" showFallback
                                        src={blog.source2}></Avatar>
                                <h1 className="text-medium font-semibold leading-none text-default-900 mr-auto">{blog.author}</h1>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small h-[69px]">
                                <p>{blog.body}</p>
                            </CardBody>
                            <Progress
                                style={{fontFamily: 'Roboto Condensed, sans-serif'}}
                                className="max-w-md gap-0 p-1"
                                label={blog.maximumAmount + " requested"}
                                valueLabel={blog.donatedAmount / blog.maximumAmount * 100 + "%"}
                                showValueLabel={true}
                                aria-label="Donation progress" color="success"
                                classNames={{
                                    track: "drop-shadow-md border border-default p-0",
                                    indicator: "bg-gradient-to-r from-green-400 to-blue-600 p-0",
                                    label: "text-xl text-green-700 p-0",
                                    value: "text-default-600",
                                }}
                                maxValue={blog.maximumAmount} value={blog.donatedAmount}/>
                            <CardFooter className="py-0 mx-0 px-1.5">
                                <div className="flex gap-1 p-0 my-auto mx-0">
                                    <img className="w-5 h-5 my-1 p-0 mx-0"
                                         src="https://i.pinimg.com/236x/a5/2b/88/a52b8861e57c7ba5fd593c6f2fa61e11.jpg"></img>
                                    <h1 className="font-semibold p-0 mx-0 my-1 text-default-400 text-small">{blog.donatorCount}</h1>
                                    <h1 className=" text-default-400 p-0 my-1 text-small">Donated</h1>
                                </div>
                            </CardFooter>
                        </Card>
                    {/* </Link> */}
            </div>
        ))}
    </ul>

    );

}
 
export default FulfilledOrgPosts;