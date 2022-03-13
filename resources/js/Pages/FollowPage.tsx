import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {Link, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import UserListItem from "../components/UserListItem";


export default function FollowPage({users,user}:{users:any,user:any}){
    // const user:any=usePage().props.user;

    return (
        <HomeLayout>
        <div className="w-full relative h-full py-16">
            <div className="absolute top-0 left-0 right-0 p-4 sha flex space-x-6">
                <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="" className="w-4"/>
                <p className="text-xl font-medium">{user.name}</p>
            </div>
            <div className="w-full relative">
                <div className="absolute bg-white top-0 right-0 left-0 py-2 grid grid-cols-2 gap-4">

                    <Link href={route('lists.followers')}
                          className={route().current('lists.followers')?"hover:bg-gray-50 py-2 h-full w-full text-center text-xl font-medium border-b-2 border-b-blue-300  rounded border-gray-200":"hover:bg-gray-50 py-2 h-full w-full text-center text-xl font-medium border-b  border-r-gray-400 rounded border-gray-200"}>Followers
                    </Link>
                    <Link href={route('lists.following')}
                        className={route().current('lists.following')?"hover:bg-gray-50 py-2 h-full w-full text-center text-xl font-medium border-b-2 border-b-blue-300   rounded border-gray-200":"hover:bg-gray-50 py-2 h-full w-full text-center text-xl font-medium border-b  border-r-gray-400 rounded border-gray-200"}>Following
                    </Link>

                </div>
                <div className="py-16">
                    {users.map((item:any,index:number)=>(<UserListItem itemUser={item} isFollowing={item.is_following} id={item.id} image={item.profile_photo_url} />))}
                </div>
            </div>
        </div>
        </HomeLayout>


    );
}
