import PostComponent from '@/components/PostComponent'
import Sidebar from '@/components/Sidebar'
import React, {useEffect} from 'react'
import {usePage} from "@inertiajs/inertia-react";

type Props = {
    children:any
}

const HomeLayout = ({children}: Props) => {

    return (
        <div className="h-screen w-screen flex spacing-x-4" >
            <Sidebar />
            <div id="post" className="w-full lg:w-1/2 relative   flex flex-col spacing-y-4 items-center overflow-y-scroll"   >
              {children}

            </div>
            <div id="rightSidebar " className='hidden lg:flex flex-col'>


            </div>
        </div>

    )
}

export default HomeLayout
