import React, {ChangeEvent, useState} from 'react'
import {Inertia} from "@inertiajs/inertia";
import axios from "axios";
import {useForm} from "@inertiajs/inertia-react";

type Props = {}

function StatusCreate({}: Props) {

    const inputRef = React.useRef(null);
    const [media,setMedia]=useState<Object[]>([]);
    const {data,post,setData,reset,errors}=useForm({
        caption:null,
        avatar:[]
    });
    const handleClickInput=()=>{
        // @ts-ignore
        inputRef.current.click();
    }
    const handleSubmit=()=>{

        post('/post/create',{
            preserveScroll: true,
            onSuccess: () =>{
                reset();
                setMedia([]);
            },
        });


    }
     const handleChange=(e:any)=>{
        setData('avatar',e.target.files);
       if(e.target.files!=0){
           const newMedia=[...media];

           // @ts-ignore
         [...e.target.files].forEach(async (item,index) => {
              let reader = new FileReader();
               reader.readAsDataURL(item);
               let data={};
               reader.onloadend=(es)=>{
                   newMedia.push({
                       url:es.target?.result
                   });
                   if(index==e.target.files.length-1){
                       setMedia(newMedia);
                   }
               }

              })

       }
    }

    const removeItem=(index:number)=>{
        const newMedia=[...media];
        newMedia.splice(index,1);
        const newData=[...data.avatar];
        newData.splice(index,1);
        setData("avatar",newData);
        setMedia(newMedia);



    }

    const imageList=media.map((item:any,index:number)=>{
        return <div className=" w-full relative" key={index}>
              <div onClick={()=>removeItem(index)} className={"cursor-pointer text-sm bg-black text-white rounded-full p-1 absolute right-4 top-4"}>X</div>
             <img src={item.url} className="object-fit rounded-xl" />
        </div>
    })

  return (

    <div className="w-full max-w-xl  border-b border-gray-100">
        <div className="max-w-xl p-3">
            <div className="w-full md:flex justify-between hidden ">
                <div className="font-bold text-xl">Home</div>
                <div className="">
                    <img src="https://cdn-icons-png.flaticon.com/512/2913/2913136.png" alt="" className="w-8" />
                </div>
            </div>
            <div className="my-3 flex">
                <div className="mr-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTslQd7kNVdAW-5MpXYq_cJwB03KOnETnz5Q&usqp=CAU" alt="" className="h-16 w-16 rounded-full object-cover" />
                </div>
                <div className="h-full w-full">
                    <div className="h-full w-full">
                        <input type="text"  className="h-full focus:outline-none outline-white border-0 focus:border-0  w-full py-4 text-xl mb-3" placeholder="Whats Happening ?" onChange={(e:any)=>{
                            setData("caption",e.target?.value);
                        }} />
                        <div className={"text-bg-500"}>{errors.caption!=null?errors.caption:null}</div>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="pl-14 flex justify-between items-center">
                <div >
                    <input hidden ref={inputRef} type={"file"} multiple onChange={handleChange}/>
                    <img onClick={handleClickInput} src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="" className="h-5 w-5 rounded-none object-cover cursor-pointer" />
                </div>
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-300 text-white font-bold rounded-3xl hover:bg-blue-400 active:bg-blue-500 outline-none">Tweet</button>
            </div>
        </div>
        <div className={"grid grid-cols-2"}>
            {media.length>0?imageList:null}

        </div>



    </div>
  )
}

export default StatusCreate
