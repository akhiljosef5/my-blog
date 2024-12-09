import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'akhil', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'akhil', id: 3 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'arya', id: 4 }
    ]);

    const handleDelete = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title='all blogs' handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'akhil')} title="akhil's blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;