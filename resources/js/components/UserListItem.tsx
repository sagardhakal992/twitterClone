import React from "react";
import {Inertia} from "@inertiajs/inertia";
type Props={
    isFollowing:boolean,
    id:number,
    image:string,
    itemUser:any
};
export default function UserListItem({isFollowing,id,image,itemUser}:Props){
    return (<div className="p-4 py-2 my-4 shadow mx-8 rounded-sm items-center flex">
        <div className="rounded-full w-16 h-16 bg-red-50">
            <img src={image} className="rounded-full w-16 h-16 bg-red-50 object-cover" />
        </div>
        <div className="flex ml-4 flex-col text-xl justify-center"><span>{itemUser.name}</span><span
            className="text-sm font-medium text-gray-500">@SagarDhakal</span></div>
        <div className="ml-auto mr-6">
            <button
                onClick={()=>{
                    if(!isFollowing){
                        Inertia.post(`/follow/${id}`);
                    }
                    else {
                        Inertia.post(`/unfollow/${id}`);
                    }
                }}
                className="py-2 px-8 bg-blue-400 hover:bg-blue-500 outline-none active:bg-blue-700 hover:shadow-md active:shadow-blue-400 shadow-blue-300 rounded-3xl text-white text-lg">{isFollowing?"Unfollow":"Follow"}
            </button>
        </div>
    </div>);
}
