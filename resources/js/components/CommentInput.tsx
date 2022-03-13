import React from 'react';
import {useForm} from "@inertiajs/inertia-react";


export default function CommentInput({id}:{id:number}){
    const {post,data,setData,errors,reset}=useForm({comment:""});

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        post(`/post/${id}/comment`);
        setData('comment',"");


    }

    return (<div className="flex w-full  items-center justify-center shadow-lg  mx-8 mb-4 ">
        <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea value={data.comment} onChange={(e:any)=>{
                        setData('comment',e.target?.value);

                    }} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required />
                </div>
                <div className="w-full flex items-start md:w-full px-3">
                    <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                    </div>
                    <div className="-mr-1">
                        <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                    </div>
                </div>
            </div>
        </form>
    </div>

);
}
