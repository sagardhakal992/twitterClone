import React from "react";
import CommentInput from './CommentInput'
import {comment} from "postcss";
export default function CommentSection({user,comment}:{user:any,comment:any}){
    return (
        <div className="flex my-2 w-full space-x-3 rounded-sm shadow-sm">

            <div className="comment-avatar"><img
                src={user.profile_photo_url} alt=""
                className="h-20 w-20 rounded-full object-cover"/></div>

            <div className="comment-box">
                <div className="comment-head">
                    <h6 className="comment-name by-author"><a href="#"
                                                              className="text-xl font-semibold">{user.name}</a></h6>
                    <span>hace 20 minutos</span>
                    <i className="fa fa-reply"></i>
                    <i className="fa fa-heart"></i>
                </div>
                <div className="comment-content">{comment}
                </div>
            </div>


        </div>

    );
}
