import React, { useEffect, useState } from "react";
import { Box  } from "@mui/material";
import BlogPageCard from '../components/BlogPageCard';
import Loader from "./Loader";

const BlogPage = () => {

  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts", {
        method: "GET",
      });
      if (response.ok) {
        const res = await response.json();
        let Posts = res.posts;
        setBlogData(Posts);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box sx={{ width: "1150px", m: "auto", p: "40px 0" }}>
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            {blogData && blogData.map((Posts)=>{
                return <BlogPageCard key={Posts.id} res={Posts} />
            })}
        </Box>
      </Box>
    </>
  );
};

export default BlogPage;
