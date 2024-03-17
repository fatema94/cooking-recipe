import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleToCookTable}) => {
    const[blogs , setBlogs] =useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 m-10">
        {
            blogs.map(blog => <Blog 
                key={blog.recipe_id}
                 blog={blog}
                 handleToCookTable={handleToCookTable}
                 >
                 </Blog>)
        }
        </div>
    );
};
Blogs.PropTypes ={
    HandleToCookTable: PropTypes.func
}

export default Blogs;