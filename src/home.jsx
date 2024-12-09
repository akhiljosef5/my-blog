import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'akhil', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'akhil', id: 3 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'arya', id: 4 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title='all blogs' />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'akhil')} title="akhil's blogs" />
        </div>
    );
}

export default Home;