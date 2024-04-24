import {useState} from "react";
import './card.css';
const OrgMainPage = () => {
    const [blogs, setBlogs] = useState(
        [   
            {title: 'card1', id: 1},
            {title: 'card2', id: 2},
            {title: 'card3', id: 3},
            {title: 'card4', id: 4},
            {title: 'card5', id: 5},
            {title: 'card6', id: 6},
            {title: 'card7', id: 7}
        ]);
    return ( 

        
        <div className="OrgPage">
             <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
<div className="Cards Section">
<section className="p-4">
<h2 className="text-2xl font-bold mb-4">Blog List</h2>
<ul className="flex flex-wrap -m-2">
  {blogs.map(blog => (
    <li key={blog.id} id={`blog${blog.id}`}  className="card_info w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="card">
        <div className="card-info">
          <p className="title">{blog.title}</p>

        </div>
      </div>
    </li>
  ))}
</ul>
</section>
</div>


            {/* <section className="p-4">
  <h2 className="text-2xl font-bold mb-4">Blog List</h2>
  <ul className="flex flex-wrap -m-2">
    {blogs.map(blog => (
      <li key={blog.id} id={`blog${blog.id}`} className="card_info w-full sm:w-1/2 md:w-1/3 p-2">
        <div className="card  border rounded shadow">
          <div className="card-info p-4">
            <p className="title text-lg font-semibold">{blog.title}</p>
            
          </div>
        </div>
      </li>
    ))}
  </ul>
</section> */}


        </div>
        

     );
}
 
export default OrgMainPage;