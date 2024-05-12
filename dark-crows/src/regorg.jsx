
import { useEffect, useState} from "react";  
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
  } from "@nextui-org/react";
// import useState function from react library
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ThePole from "./Admin/adminNav"; 
import './admincss.css';
import './button.css';
import AdminNavbar from "./Admin/AdminNavbar";
const Regorg = () => {  
const [blogs, setBlogs] = useState([
    {email: 'hamada@gmail.com', type:'Refugees & Improverished',number:'01017315557',title: 'El-Nozha, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Masr El Kheir', id: 1, profilePic: 'https://www.globalgiving.org/pfil/organ/81861/orglogo.jpg', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'},
    {email: '3andaleeb@gmail.com',type:'Refugees & Improverished',number:'01017315557',title: 'El-Nozha, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Orman', id: 2, profilePic: 'https://wagadtoha.com/images/logos/xOrmanCharityAssociation.jpg.pagespeed.ic.4Z1azpfjsj.jpg', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2515.404227111834!2d31.133603510856908!3d29.97802646467708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845dd6064e223%3A0x8551f3812d7b7411!2z2KPZh9ix2KfZhdin2Kog2KfZhNis2YrYstip!5e0!3m2!1sen!2seg!4v1715032705918!5m2!1sen!2seg'},
    {email: 'asmar@gmail.com',type:'Refugees & Improverished',number:'01017315557',title: 'Al Thawra, El Mokattam, Cairo Governorate 4414540', body: 'lorem ipsum...', author: 'Ibra fundraiser', id: 3, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247386!2d31.235299574630837!3d30.023002819587926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715032842846!5m2!1sen!2seg'},
    {email: 'volleyball@gmail.com',type:'Orphanage',number:'01207921760',title: 'Al Haram, Giza Governorate 3512201', body: 'lorem ipsum...', author: 'Ma3 el e5wa', id: 4, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'},
    {email: 'ahmedgas@gmail.com',type:'Refugees & Improverished',number:'01143777537',title: 'El-Nozha, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Mivida fundraising', id: 5, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg' },
    {email: 'halawa@gmail.com',type:'Hospital',number:'01017315557',title: 'Sekat Hadid Al Mahger, El Sayeda Zeinab, Cairo Governorate 4260102', body: 'lorem ipsum...', author: '57357', id: 6, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247386!2d31.235299574630837!3d30.023002819587926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715032842846!5m2!1sen!2seg'},
    {email: 'joemagdy@gmail.com',type:'School Supplies',number:'01017315557' ,title: 'Al Abageyah، قسم الخليفة, Cairo Governorate 4413430', body: 'lorem ipsum...', author: 'Ibra fel watchlist', id: 7, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'},
    {email: 'outofideas@gmail.com',type:'Hospital',number:'01017315557',title: 'Anwar El-Sadat, Ismailia Governorate 8363541', body: 'lorem ipsum...', author: 'Sadik', id: 8, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'}
]);

  const [searchTerm, setSearchTerm] = useState(""); // state to store the search term
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [tobedeletedBlog, settobedeletedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const categories = {
    'Type': ['Hospital', 'Orphanage', 'Refugees & Improverished', 'School Supplies'  ],
    'Governorate': ['Ismailia Governorate', 'Cairo Governorate', 'Giza Governorate'],
    'Area': ['El-Nozha', 'El Mokattam', 'El Sayeda Zeinab', 'El Haram', 'Al Abageyah', 'Al Thawra', 'Sekat Hadid Al Mahger', 'Anwar El-Sadat']
    // Add more categories and subcategories as needed
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    console.log(selectedCategory);
  };
 
    const deleteblogs = (id)=>{
        const newlist = blogs.filter(blog => blog.id !== id)
        setBlogs(newlist)
    };
    function filterbegad () {
      deleteblogs(tobedeletedBlog.id);
      if(tobedeletedBlog.id === selectedBlog.id){
      setSelectedBlog(null);
      }
      
    };
    const filteredBlogs = blogs.filter((blog) =>{if (selectedCategory === 'Governorate' && selectedSubcategory !== null ) {
        console.log(selectedSubcategory);
        return blog.author.toLowerCase().includes(searchTerm.toLowerCase()) && blog.title.toLowerCase().includes(selectedSubcategory.toLowerCase());
      }
      else if(selectedCategory === 'Type' && selectedSubcategory !== null){
        return blog.author.toLowerCase().includes(searchTerm.toLowerCase()) && blog.type.toLowerCase().includes(selectedSubcategory.toLowerCase());
      }
      else if(selectedCategory === 'Area' && selectedSubcategory !== null){
        return  blog.author.toLowerCase().includes(searchTerm.toLowerCase()) && blog.title.toLowerCase().includes(selectedSubcategory.toLowerCase());
      }
      else {
        return  blog.author.toLowerCase().includes(searchTerm.toLowerCase());
      }}
    );


    return (
        <div className="regorg flex flex-col  h-screen w-screen">
          <AdminNavbar/>
            {/* <h2 className="font-bold text-center text-4xl">Registered </h2> */}
            
           <div className="split-div flex ">
            <div className="left-div flex-2 mr-20 ">
            <div className="flex items-center relative max-w-xs leading-7">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute left-4 w-4 h-4 mt-[2px]" style={{fill: "#fff"}}>
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input
                style={{borderImage: "conic-gradient( #00F260, #0575E6,#64f38c) 1"}}
                    className="w-full pl-10  placeholder: placeholder:text-white placeholder:focus:text-gray-600 h-10 
                    leading-7 outline-none bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white transition-colors 
                    duration-300 ease-in-out border-2 border-transparent border-gradient radial"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
         </div>
         <div className="flex flex-row ">
        <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
          >
           {selectedCategory || "Category"}  
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Action event example" 
          onAction={(key) => handleCategoryClick(key)}
        > 
        {Object.keys(categories).map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}

        </DropdownMenu>
      </Dropdown>
      {selectedCategory && (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
          {selectedSubcategory || "Filtered Category"}  
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Action event example" 
          onAction={(key) => setSelectedSubcategory(key)}
        >
          {categories[selectedCategory].map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )}
      </div>

            <div
                className="blogs"
                style={{ overflowY: "scroll", maxHeight: "323px", maxWidth:"300px", display: "grid", gridColumn:"4" }}
            >
                {filteredBlogs.map((blog) => (
                    <div onClick={() => (setSelectedBlog(blog) 
                      ,toggleVisibility(blog.id))
                  }
                        className="blog-preview justify-between border-2 border-green-500 text-black hover:shadow-lg hover:shadow-green-900 
                        transition duration-200 ease-in-out py-2 px-4 rounded"
                        style={{
                          cursor:"pointer",
                            display: "flex",
                            alignItems: "center",
                            margin: "0 ",
                        }}
                        key={blog.id}
                    >
               
                            <img className="blog-image rounded-full" style={{width:"18%", maxWidth:"100px"}} src={blog.profilePic} />
                        
                        <div style={{columnSpan:"2"  }}>
                            <h2 className="text-xl">{blog.author}</h2>
                        </div>
                        <button
                            className="bin-button min-w-10"
                            onClick={()=>{setOpen(!open); settobedeletedBlog(blog)}}
                                                     
                        >
                            <svg
                                className="bin-top"
                                viewBox="0 0 39 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="5"
                                    x2="39"
                                    y2="5"
                                    stroke="white"
                                    strokeWidth="4"
                                ></line>
                                <line
                                    x1="12"
                                    y1="1.5"
                                    x2="26.0357"
                                    y2="1.5"
                                    stroke="white"
                                    strokeWidth="3"
                                ></line>
                            </svg>
                            <svg
                                className="bin-bottom"
                                viewBox="0 0 33 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="path-1-inside-1_8_19"
                                    fill="white"
                                >
                                    <path
                                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                                    ></path>
                                </mask>
                                <path
                                    d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                                    fill="white"
                                    mask="url(#path-1-inside-1_8_19)"
                                ></path>
                                <path
                                    d="M12 6L12 29"
                                    stroke="white"
                                    strokeWidth="4"
                                ></path>
                                <path
                                    d="M21 6V29"
                                    stroke="white"
                                    strokeWidth="4"
                                ></path>
                            </svg>
                        </button>
                        
                    </div>
                ))}
            </div>
            </div>
            
            <div className="right-div shadow-2xl flex-1  mr-20" >
            {(selectedBlog && isVisible) ? (
                    <div>
                        <div className="split-div " style={{backgroundColor:"#5d62f5"}}>
                        <div className="left-div border-1 border-black mr-0" >
                        <img className="blog-image w-24 h-24  "  src={selectedBlog.profilePic} />          
                         </div>
                         <div id="hamada"className="right-div flex flex-center w-full ">
                        <h2 className="font-bold text-2xl  mx-auto my-auto">{selectedBlog.author}</h2>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.502427512598!2d31.53100688319738!3d30.0033842612752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582333c548ca6f%3A0x87cab5af140dd0ea!2sMivida%20-%20Gate%201!5e0!3m2!1sen!2seg!4v1714316063328!5m2!1sen!2seg" width="200" height="200" style={{border:"0"}}></iframe> */}
                        </div>
                        </div>
                        <div className="split-div ">
                        <div className="left-div text-left flex flex-col max-w-60"style={{backgroundColor:"#D5D8E1"}} >
                            <p className="font-bold text-lg ">Type:</p>
                            <p>{selectedBlog.type}</p>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                            <h3 className="font-bold text-lg ml-0">Address:</h3>
                            <p>{selectedBlog.title}</p>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div >
                    <h4 className="font-bold text-lg ml-0">Contact:</h4>
                        <div className="card-contact mb-0 mt-auto">
                            <li className="icon-contact">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                </svg>
                                     Tel: {selectedBlog.number}
                            </li>
                            <li className="icon-contact">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                                </svg>
                                    Email: {selectedBlog.email}
                            </li>            
                        </div>
                        </div>
                         </div>
                         <div className="right-div ">
                         <iframe className="mr-0 h-full"src={selectedBlog.src}
                            width="700" ></iframe>
                          </div>  
                         </div> 
                           
                        {/* Display other info from selectedBlog */}
                    </div>
                ):null}



            </div>
            <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Delete account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this account? All of this data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {setOpen(false);filterbegad();}}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
            </div>
            </div>
      
    );
}
 
export default Regorg;