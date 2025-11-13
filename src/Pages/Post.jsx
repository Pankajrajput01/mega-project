import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

 
  console.log(userData.$id , "this is userData");
  console.log(post);
  

  const isAuthor = post && userData ? post.Userid === userData.$id : console.log("this id not match");
 
  

  useEffect(() => {
    if (slug) {
      Service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    Service.deletePost(post.$id).then((status) => {
      if (status) {
        Service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 bg-cyan-900 ">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2  bg-blue-700">
          <img
            src={Service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6 bg-gray-700">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css bg-green-700">{parse(post.Content)}</div>
          {/* <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
            onClick={() => navigate("/edit-post/:slug")}
          >
            {post ? "Update" : "Submit"}
          </Button> */}
      </Container>
    </div>
  ) : null;
}
