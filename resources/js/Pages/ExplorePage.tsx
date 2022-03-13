import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import {Link, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import UserListItem from "../components/UserListItem";

export default function ExplorePage({users}:{users:any}){
const user=usePage().props.user;
const userList=users.data.map((item:any,index:number)=><UserListItem itemUser={item} key={item.id} image={item.profile_photo_url} isFollowing={item.is_following} id={item.id} />);

    return (
        <HomeLayout>
            <div className="w-full relative h-full py-16">
                <div className="absolute top-0 left-0 right-0 p-4 sha flex space-x-6">
                    <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt="" className="w-4"/>
                    <p className="text-xl font-medium">Explore</p>
                </div>
                <div className="w-full relative">
                    <div className="py-2">
                        {userList}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
