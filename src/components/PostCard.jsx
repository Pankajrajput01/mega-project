import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:translate-y-[-2px]">
      <Link to={`/post/${$id}`} className="block">
        <div className="w-full h-44 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/post/${$id}`} className="no-underline">
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        </Link>
        <div className="mt-3 pt-3 border-t border-blue-100 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-medium text-blue-600">Read Article →</span>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
