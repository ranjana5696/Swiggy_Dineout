import React, { useEffect, useState } from "react";
import { Box  } from "@mui/material";
import BlogPageCard from '../components/BlogPageCard';
import Loader from "./Loader";

const BlogPage = () => {

  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await fetch("https://dummyapi.online/api/blogposts", {
        method: "GET",
      });
      if (response.ok) {
        const res = await response.json();
        setBlogData(res);
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
            {blogData && blogData.map((res)=>{
                return <BlogPageCard key={res.id} res={res} />
            })}
        </Box>
      </Box>
    </>
  );
};

export default BlogPage;
