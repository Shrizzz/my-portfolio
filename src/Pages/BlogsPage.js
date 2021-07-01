import React from "react";
import BlogsData from "../Components/BlogsImageData";
import Title from "../Components/Title";

function BlogsPage() {
  return (
    <div>
      <div className="blog-title">
        <Title title={"My Blogs"} span={"My Blogs"} />
      </div>
      <div className="blogsSection">
        {BlogsData.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" srcset="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
                <div className="date-con">
                  <p>
                    {blog.date}-{blog.month}-{blog.year}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
