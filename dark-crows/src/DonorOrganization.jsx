import {useState} from "react";  
import {Dropdown, DropdownTrigger,DropdownMenu,DropdownItem, Input} from "@nextui-org/react";
import {Button, useDisclosure} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import TheBAR from "./TheBAR";
const DonorOrganization = () => {  
const [blogs, setBlogs] = useState([
  {email: 'hamada@gmail.com', type:'Non-Profit',number:'01017315557',title: 'El-Nozha, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Masr El Kheir', id: 1, profilePic: 'https://www.globalgiving.org/pfil/organ/81861/orglogo.jpg', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16433.353060381876!2d31.270452825658392!3d30.01714492565779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458398acc67dc43%3A0xc9bb9167c0afe413!2zTWlzciBFbGtoZWlyIEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdi12LEg2KfZhNiu2YrYsQ!5e0!3m2!1sen!2seg!4v1715537429312!5m2!1sen!2seg'},
  {email: '3andaleeb@gmail.com',type:'Non-Profit',number:'01016915557',title: 'Gesr El Suez, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Orman', id: 2, profilePic: 'https://wagadtoha.com/images/logos/xOrmanCharityAssociation.jpg.pagespeed.ic.4Z1azpfjsj.jpg', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27622.462101936388!2d31.31093484409111!3d30.071044359572817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e65c5c6db47%3A0x5771b11558409c4!2sDar%20Al%20Orman%20Association!5e0!3m2!1sen!2seg!4v1715537604273!5m2!1sen!2seg'},
  {email: 'asmar@gmail.com',type:'Church',number:'01017315557',title: 'Al Thawra, El Mokattam, Cairo Governorate 4414540', body: 'lorem ipsum...', author: 'Ibra fundraiser', id: 3, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247386!2d31.235299574630837!3d30.023002819587926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715032842846!5m2!1sen!2seg'},
  {email: 'volleyball@gmail.com',type:'Mosque',number:'01207921760',title: 'Al Haram, Giza Governorate 3512201', body: 'lorem ipsum...', author: 'Ma3 el e5wa', id: 4, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'},
  {email: 'ahmedgas@gmail.com',type:'Church',number:'01143777537',title: 'El-Nozha, El Nozha, Cairo Governorate 4470038', body: 'lorem ipsum...', author: 'Mivida fundraising', id: 5, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg' },
  {email: 'halawa@gmail.com',type:'Hospital',number:'01017315557',title: 'Sekat Hadid Al Mahger, El Sayeda Zeinab, Cairo Governorate 4260102', body: 'lorem ipsum...', author: '57357', id: 6, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247386!2d31.235299574630837!3d30.023002819587926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715032842846!5m2!1sen!2seg'},
  {email: 'joemagdy@gmail.com',type:'School',number:'01017315557' ,title: 'Al Abageyah، قسم الخليفة, Cairo Governorate 4413430', body: 'lorem ipsum...', author: 'Ibra fel watchlist', id: 7, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'},
  {email: 'outofideas@gmail.com',type:'Hospital',number:'01017315557',title: 'Anwar El-Sadat, Ismailia Governorate 8363541', body: 'lorem ipsum...', author: 'Sadik', id: 8, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s', clicked: false, src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg'}
]);

  const [searchTerm, setSearchTerm] = useState(""); // state to store the search term
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isVisible, setIsVisible] = useState(true);
const [isVisibles, setIsVisibles] = useState(Array(blogs.length).fill(false));
  const toggleVisibility = (int) => (isVisibles.fill(false), isVisibles[int] = true)
  const categories = {
    'Type': ['Hospital', 'School', 'Church', 'Mosque','Non-Profit'],
    'Governorate': ['Ismailia Governorate', 'Cairo Governorate', 'Giza Governorate'],
    'Area': ['El-Nozha', 'El Mokattam', 'El Sayeda Zeinab', 'El Haram', 'Al Abageyah', 'Al Thawra', 'Sekat Hadid Al Mahger', 'Anwar El-Sadat']
    // Add more categories and subcategories as needed
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    console.log(selectedCategory);
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
          <TheBAR/>
           <div className="split-div flex  mt-12">
            <div className="left-div mr-20 ml-2">
            <div className="flex items-center relative max-w-xs leading-7">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute left-4 w-4 h-4 mt-[2px]" style={{fill: "#fff"}}>
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <Input
                placeholder="Search"
                value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
            classNames={{
              base: "max-w-full sm:max-w-[22rem] h-10 shadow-xl mb-4",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            
          size="sm"
            type="search"
          />
         </div>
         <div className="flex flex-row mb-4">
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
    <button
                            className="bin-button z-20 h-12 mb-auto ml-[30px] text-2xl font-bold"
                            onClick={() => (setSelectedSubcategory(null),handleCategoryClick(null))}
                                                     
                        >X</button>
      </div>

      <div
                className="blogs"
                style={{ overflowY: "scroll", maxHeight: "335px", maxWidth:"300px", display: "grid", gridColumn:"4" }}
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

                        
                    </div>
                ))}
                <div className="h-3">

                </div>
            </div>
            </div>
            
            <div className="right-div shadow-2xl mr-20" >
            {(selectedBlog && isVisible) ? (
                    <div>
                        <div className="split-div " style={{backgroundColor:"#5d62f5"}}>
                        <div className="left-div border-1 border-black mr-0" >
                        <img className="blog-image w-24 h-24  "  src={selectedBlog.profilePic} />          
                         </div>
                         <div id="hamada"className="right-div flex flex-center w-full ">
                        <h2 className="font-bold text-2xl  mx-auto my-auto">{selectedBlog.author}</h2>
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
                           
                    </div>
                ):null}



            </div>
            </div>
            </div>
      
    );
}
 
export default DonorOrganization;