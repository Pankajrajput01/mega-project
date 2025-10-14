import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <article className="card overflow-hidden">
      <Link to={`/post/${$id}`} className="block">
        <div className="w-full h-44 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/post/${$id}`} className="no-underline">
          <h3 className="text-lg font-semibold text-[var(--text)] line-clamp-2">{title}</h3>
        </Link>
      </div>
    </article>
  );
}

export default PostCard;
