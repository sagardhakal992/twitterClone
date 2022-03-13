import React from "react";
import '../../css/app.css';
import HomeLayout from "../Layouts/HomeLayout";
import PostComponent from "../components/PostComponent";
import CommentSection from "../components/CommentSection";
import CommentInput from "../components/CommentInput";

export  default function DetailPage({post}:{post:any}){
    return (
        <HomeLayout>


            <PostComponent isBookmarked={post.is_bookmarked} isLiked={post.is_liked} fullUrl={post.full_url} like_count={post.like_count} id={post.id} itemUser={post.user} imageUrl={post.image_url} commentCount={post.comment_count} caption={post.caption} />
            <div className="px-4 w-full mx-auto">
                {post.comments.map((item:any,index:number)=><CommentSection comment={item.comment} user={item.user} key={index} />)}
            </div>
            <CommentInput id={post.id} />
        </HomeLayout>
    );
}
