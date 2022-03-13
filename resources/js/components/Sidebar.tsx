import React from 'react'
import SidebarLink from './SidebarLink';
import {Link, usePage} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import JetButton from "../Jetstream/Button";
import {Inertia} from "@inertiajs/inertia";

type Props = {}

export default function Sidebar({ }: Props) {
    const [linkList, setLinkList] = React.useState([
        { name: "Home",url:"/"},
        { name: "Explore",url:"/explore" },
        { name: "Notifications",url:"/notification" },
        { name: "Messages",url:"/messages" },
        { name: "Bookmarks",url:"/bookmarks" },
        { name: "Lists",url:"/lists/followers" },
        { name: "Profile",url:"/profile" }
    ]);
    const user=usePage().props.user;

    const [hidden, setHidden] = React.useState(true);

    return (
        <div id="sidebar" className="relative w-16 md:w-1/4 h-full border border-l-0 py-2 flex flex-col items-center">
            <div className="h-12">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwx4nQpxjfaB4WdJgpRkEBkD4cvF3NMcD7pTqpY9zsSkwMYHIkNRp_qsF_n71wMvSFbU&usqp=CAU" alt="" className="h-12" />
            </div>
            <div className="flex flex-col space-y-0 items-start md:pl-12 mb-4">
                {linkList.map((item: any, index: number) => <SidebarLink key={index} url={item.url} title={item.name} />)}
            </div>
            <div className="md:hidden flex my-4 w-12 h-12 rounded-full items-center justify-center hover:cursor-pointer">
                <img src="https://cdn-icons-png.flaticon.com/512/929/929256.png" alt="" className="h-12" />
            </div>
            <button className="hidden md:block text-2xl text-white bg-blue-400 rounded-full md:w-2/3 lg:w-1/2 mx-auto py-2 hover:shadow-md hover:bg-blue-500 outline-none active:bg-blue-600">Tweet</button>
            <div className="w-full md:flex items-center h-20 absolute bottom-0 right-0 left-py-0 md:border-t-[1px] xl:pl-20 cursor-pointer hover:bg-slate-100">
                <div className="h-12 w-12 mx-auto md:mx-0 rounded-full bg-red-100"></div>
                <div className="ml-2 hidden md:block">
                    <div className="flex justify-between">
                        <p className="text-xl">Sagar Dakal</p>
                        <img onClick={()=>{
                            setHidden(!hidden);
                        }} src="https://cdn-icons-png.flaticon.com/512/512/512142.png" alt="" className="h-6 mr-2 hover:cursor-pointer" />
                    </div>
                    <p className="flex">Sagar.dhakal312@gmail.com</p>
                </div>
            </div>
            <div className={hidden?"hidden  border px-4 rounded-md bg-white absolute left-12 bottom-20 flex flex-col":" border flex flex-col px-4 rounded-md bg-white absolute left-12 bottom-20"} >
                {user ==null ?<div className="w-full flex flex-col ">
                    <Link href={route('login')}  className="text-xl px-4 mx-auto py-2 hover:bg-slate-50">Login</Link>
                    <Link href={route('register')}  className="text-xl px-4 mx-auto py-2 hover:bg-slate-50">Register</Link>
                </div>:<button onClick={()=>{

                    Inertia.post(route('logout'));
                }}  className="text-xl px-4 mx-auto py-2 hiver:bg-slate-50">Logout</button>}
            </div>
        </div>

    );
}
