const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogs-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>By: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;