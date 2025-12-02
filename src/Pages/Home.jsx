import React, { useEffect, useState } from "react";
import service from '../appwrite/config';
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    // Pehle auth check kro
    if (authStatus) {
      navigate('/Home');
      
      return;
    }

    // Agar authenticated h to posts fetch kro
    
    service.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, [authStatus, navigate]);
  
  return (
    <>
      {loading ? (
        <div className="w-full py-16 mt-8 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Loading...
                </h1>
                <p className="text-slate-600 text-lg mt-3">Please wait while we fetch the posts</p>
              </div>
            </div>
          </Container>
        </div>
      ) : posts.length === 0 ? (
        <div className="w-full py-16 mt-8 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  No posts available
                </h1>
                <p className="text-slate-600 text-lg mt-3">Start creating posts to share with the community</p>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className="w-full py-12">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Latest Posts</h2>
              <p className="text-slate-600 mt-1">Discover the newest content from our community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <div key={post.$id} className="animate-fadeInScale">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default Home;
