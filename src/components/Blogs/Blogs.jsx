import Blog from "../Blog/Blog";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
               blogs.map(blog => <Blog key={blog.ID} blog ={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;