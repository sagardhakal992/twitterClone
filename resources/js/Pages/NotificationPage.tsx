import React from 'react';
import HomeLayout from "../Layouts/HomeLayout";

export default function NotificationPage({notifications}:{notifications:any}){
    const notificationList=notifications.data.map((item:any,index:number)=>(
        <div className={"border shadow px-4 rounded"}>
          <span className={"font-bold text-lg"}>{item.data.user.name} likes your post</span>   {item.data.post.caption.substring(0,25)}
        </div>
    ));
    return (
        <HomeLayout>
            <div className={"px-8 flex flex-col w-full justify-start"}>
                <h1 className={"text-2xl"}>Notifications</h1>

                {notificationList}

            </div>
        </HomeLayout>
    );
}
