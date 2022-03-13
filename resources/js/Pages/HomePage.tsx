import PostComponent from '@/components/PostComponent'
import StatusCreate from '@/components/StatusCreate'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

type Props = {
    posts:any,

}

function HomePage({posts}: Props) {
    // const [postList, setPostList] = React.useState(posts.data);
    return (
    <HomeLayout>


        <StatusCreate />
        {posts.data.map((item:any)=><PostComponent isBookmarked={item.is_bookmarked} isLiked={item.is_liked} fullUrl={item.full_url} like_count={item.like_count} id={item.id} caption={item.caption.substring(0,150)} commentCount={item.comment_count} imageUrl={item.image_url} key={item.id} itemUser={item.user} />)}


    </HomeLayout>


  )
}

export default HomePage
