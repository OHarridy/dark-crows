
import { useEffect, useState} from "react";   // import useState function from react library
import './admincss.css';
const Regorg = () => {  
const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Masr El Kheir', id: 1, profilePic: 'https://www.globalgiving.org/pfil/organ/81861/orglogo.jpg'},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Orman', id: 2, profilePic: 'https://wagadtoha.com/images/logos/xOrmanCharityAssociation.jpg.pagespeed.ic.4Z1azpfjsj.jpg'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ibra', id: 3, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ma3 el e5wan', id: 4, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Ma3 hitler', id: 5, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'test69', id: 6, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'suck', id: 7, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'soba3', id: 8, profilePic: 'https://play-lh.googleusercontent.com/Ne1Ywh282G_uQ6voKpOXanguGOTuJZ_Iw0E6ouc4f8AzhLGnSlEA9wTWNSFVED12wP9D'}
]);

    const [searchTerm, setSearchTerm] = useState(""); // state to store the search term
    const [selectedBlog, setSelectedBlog] = useState(null);
    // filter the blogs based on the search term
   

    const deleteblogs = (id)=>{
        const newlist = blogs.filter(blog => blog.id !== id)
        setBlogs(newlist)
    };
    const filteredBlogs = blogs.filter((blog) =>
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="regorg flex flex-col">
            <h2>All Registered Organizations</h2>
           <div className="split-div">
            <div className="left-div">
            <div class="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input
                    class="input"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div
                className="blogs "
                style={{ overflowY: "scroll", maxHeight: "300px", maxWidth:"300px", display: "flex", flexDirection: "column" }}
            >
                {filteredBlogs.map((blog) => (
                    <div
                        className="blog-preview"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0 ",
                        }}
                        key={blog.id}
                    >
               
                            <img className="blog-image" style={{width:"18%", maxWidth:"100px"}} src={blog.profilePic} />
                        
                        <div style={{  }}>
                            <h2>{blog.author}</h2>
                        </div>
                      
                        <button
                            class="info-button ml-auto "
                            onClick={() => setSelectedBlog(blog)}
                        >
                         𝓲
                        </button>
                        <button
                            class="bin-button "
                            onClick={() => deleteblogs(blog.id)}
                        >
                            <svg
                                class="bin-top"
                                viewBox="0 0 39 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="5"
                                    x2="39"
                                    y2="5"
                                    stroke="white"
                                    stroke-width="4"
                                ></line>
                                <line
                                    x1="12"
                                    y1="1.5"
                                    x2="26.0357"
                                    y2="1.5"
                                    stroke="white"
                                    stroke-width="3"
                                ></line>
                            </svg>
                            <svg
                                class="bin-bottom"
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
                                    stroke-width="4"
                                ></path>
                                <path
                                    d="M21 6V29"
                                    stroke="white"
                                    stroke-width="4"
                                ></path>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            </div>
            <div className="right-div shadow-2xl " >
            {selectedBlog && (
                    <div>
                        <div className="split-div">
                        <div className="left-div lm-0" style={{width:"18%", maxWidth:"100px"}} >
                         <img className="blog-image"  src={selectedBlog.profilePic} />
                         </div>
                         <div className="right-div">
                        <h2>{selectedBlog.author}</h2>
                        </div>
                        </div>
                        {/* Display other info from selectedBlog */}
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}
 
export default Regorg;