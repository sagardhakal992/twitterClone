import React from 'react'
import {Link, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";

type Props = {
    itemUser:any,
    imageUrl:string,
    commentCount:number,
    like_count:number,
    caption:string,
    id:any,
    isLiked:boolean,
    fullUrl:string[],
    isBookmarked:boolean
}

function PostComponent({itemUser,imageUrl,commentCount,caption,id,like_count,fullUrl,isLiked,isBookmarked}: Props) {
    const imageList=fullUrl.map((item:any,index)=><img key={index} src={item} alt="" className={fullUrl.length==1?"w-full h-[450px] rounded-xl my-3":"h-80 w-80 object-fit  rounded-xl my-3"} />)
  return (
    <div  className="max-w-2xl w-full mx-auto mb-2 p-4 bg-gray-50 rounded-xl">
        <div className="flex space-x-2">
            <div className="">
                <img src={itemUser.profile_photo_url} alt="" className="h-16 w-16 rounded-full object-cover" />
            </div>
            <div className="w-full">
                <p className="text-lg font-bold mb-1">{itemUser.name}</p>
                <Link href={route('home.show',{"post":id})} preserveScroll preserveState className="">{caption}</Link>
            </div>
        </div>

        <div className={fullUrl.length==1?"mx-auto rounded-lg max-w-[350px]":"mx-auto rounded-lg gap-4 grid grid-cols-2"}>
            {/*<img src={imageUrl} alt="" className="w-full h-[450px] rounded-xl my-3" />*/}
            {imageList}
    </div>

        <div className="flex justify-between">
            <div onClick={()=>{
                Inertia.post(`/post/${id}/like`,{},{preserveScroll:true,preserveState:true})
            }} className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded-full"><img src={isLiked?"https://cdn-icons-png.flaticon.com/512/833/833472.png":"https://cdn-icons-png.flaticon.com/128/1077/1077035.png"} alt="" className="h-5" /><span className="">{like_count}</span></div>

            <Link href={route('home.show',{"post":id})}   className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded-full"><img src="https://cdn-icons-png.flaticon.com/128/2462/2462719.png" alt="" className="h-5" /><span className="">{commentCount}</span></Link>
            <div className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded-full"><img src="https://cdn-icons-png.flaticon.com/128/1251/1251615.png" alt="" className="h-5" /><span className="">125</span></div>
            <div onClick={()=>{
                Inertia.get(route('bookmarks.toggle',{'post':id}),{},{preserveScroll:true,preserveState:true})
            }} className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded-full cursor-pointer">
                <img src={isBookmarked?"https://cdn-icons-png.flaticon.com/128/786/786453.png":"https://cdn-icons-png.flaticon.com/128/1159/1159580.png"} alt="" className="h-5" />
            </div>
        </div>
    </div>
  );
}

export default PostComponent
