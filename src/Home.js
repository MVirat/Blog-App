// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs ,isPending,error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home">
      {error && <div> {error} </div> }
      {isPending  &&  <div>loading</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;



// import { useState , useEffect} from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([null])

//   const [name ,setname] = useState('mario')

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id)
//         setBlogs(newBlogs);
//     }
//     useEffect(() => {
//       fetch('http://localhost:8000/blogs')
//       .then(res => {
//         return res.json()
//       })
//       .then(data => (
//         setBlogs(data)
//       ))       
//     },[])

//   return (
//     <div className="home">
//       {blogs &&<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> }
//     </div>
   
    
//   );
  
  
// }
 
// export default Home;





