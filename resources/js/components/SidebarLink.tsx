import JetNavLink from '@/Jetstream/NavLink'
import {Link, usePage} from '@inertiajs/inertia-react'
import React, {useEffect} from 'react'
import route from 'ziggy-js'
import {Inertia} from "@inertiajs/inertia";

type Props = {
    icon?:string,
    title:string,
    url:string
}

export default function SidebarLink({icon,title,url}: Props) {
 // let notification:any = usePage().props.unreadNotification;
    const [notification, setNotification]:any = React.useState(usePage().props.unreadNotification);
    const props:any=usePage().props;
    useEffect(()=>{
        (window as any).Echo.private(`App.Models.User.${props.user.id}`).notification((notificationss:any)=>{
            switch (notificationss.type){
                case "App\\Notifications\\PostLikedNotification":

                    setNotification(notification+1);
                    break;
            }
        });
    },[])
    return (
    <div onClick={()=>{
        Inertia.get(url,{},{preserveScroll:true});
    }}  className={route().current()?.startsWith(title.toLowerCase())?"flex my-2 md:my-2 bg-slate-100 p-3 rounded-full md:rounded-3xl justify-center items-center md:px-8 hover:font-semibold hover:cursor-pointer":"flex my-2 md:my-1 hover:bg-slate-100 p-3 rounded-full md:rounded-3xl justify-center items-center md:px-8 hover:font-semibold hover:cursor-pointer"}>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" className="h-6 md:mr-6" />
        <p className="hidden md:block text-2xl">{title}</p>
        {notification>0&&title=="Notifications"?<p className={"p-1 ml-2 px-2 font-bold rounded-full text-sm bg-slate-500 text-white"}>{notification}</p>:null}
      </div>
  )
}
