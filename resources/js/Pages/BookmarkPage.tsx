import React from "react";
import {usePage} from "@inertiajs/inertia-react";
import PostComponent from "../components/PostComponent";
import HomeLayout from "../Layouts/HomeLayout";

export  default  function BookmarkPage()
{
    const items:any=usePage().props.posts;

    const itemList=items.map((item:any,index:number)=><PostComponent isBookmarked={item.is_bookmarked} isLiked={item.is_liked} fullUrl={item.full_url} like_count={item.like_count} id={item.id} caption={item.caption.substring(0,150)} commentCount={item.comment_count} imageUrl={item.image_url} key={item.id} itemUser={item.user}/>);
    return (
        <HomeLayout>
            <div className="w-full relative h-full py-16">
                <div className="absolute top-0 left-0 right-0 p-4 shadow flex space-x-6">
                    <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="" className="w-4"/>
                    <p className="text-xl font-medium">Bookmarks</p>

                </div>

                {items.length>0?itemList:<p className={"text-2xl font-medium"}>No Bookmarks found</p>}


            </div>
        </HomeLayout>

    );
}
