import PropTypes from "prop-types";
import GeneralButton from "./generalButton";
import { PencilSquareIcon  } from '@heroicons/react/20/solid'

const ProfileCard = (props) => {
    ProfileCard.propTypes = {
        drivernidda: PropTypes.array.required,
        loggedInUser: PropTypes.array.required,
        changethis: PropTypes.func,
      }
const loggedInUser = props.loggedInUser;
const drivernidda = props.drivernidda;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    return ( 
<div>
       
<div className="h-full w-full bg-gray-200 p-8 mt-[800px] mb-12">
        <div className="bg-white rounded-lg shadow-xl ">
            <div className="absolute right-12 mt-4 rounded">
                <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" style={{display: "none"}}>
                </div>
            </div>
            <div className="w-full h-[250px]">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"/>
            </div>
            <div className="flex flex-col items-center -mt-20">
                <img src="https://comicus.co.uk/wp-content/uploads/2018/05/flat.jpg" className="w-40 border-4 border-white rounded-full"/>
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">{loggedInUser.username}</p>
                </div>
                <p className="text-gray-700">{capitalizeFirstLetter(loggedInUser.role)}</p>
                <p className="text-sm text-gray-500">{loggedInUser.about}</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            </div>
            <div className="text-2xl flex justify-end">
                <GeneralButton onPress={props.changethis} text={<PencilSquareIcon className="w-6"/>} className="m-2"/>
                </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-row gap-4">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <ul className="mt-2 text-gray-700">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Full name:</span>
                            <span className="text-gray-700">{loggedInUser.first_name+" "+loggedInUser.last_name}</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Phone:</span>
                            <span className="text-gray-700">{loggedInUser.contact_number}</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-gray-700">{loggedInUser.email}</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Password:</span>
                            <span className="text-gray-700 ">*******</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Gender:</span>
                            <span className="text-gray-700 ">{capitalizeFirstLetter(loggedInUser.gender)}</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Location:</span>
                            <span className="text-gray-700">{loggedInUser.city+", "+capitalizeFirstLetter(loggedInUser.country)}</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Address:</span>
                            <span className="text-gray-700 ">{loggedInUser.address}</span>
                        </li>

                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Subjects:</span>
                            <span className="text-gray-700">{loggedInUser.subjects}</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-gray-900 font-bold">Pending Deliveries</h4>
                    <div className="relative px-4">
                        

                    {drivernidda.map(sn => (
                    <div key={drivernidda.ETA}> 
                    
                    <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">{sn.driverName}</p>
                                <p className="text-xs text-gray-500">{sn.ETA}</p>
                            </div>
                        </div>
                    
                    </div>
                    ))}

                        


                    </div>
                </div>
            </div>
            

        </div>



        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13816.535839230537!2d31.434103619311546!3d30.03301445684388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1715456458622!5m2!1sen!2seg" width="100%" height="400px" style={{border:"0"}} className="rounded-lg shadow-xl"></iframe>






        </div>
        </div>
         
     );
}
 
export default ProfileCard;
   