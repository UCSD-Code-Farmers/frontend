import React, {useEffect} from 'react'
import store from '../store/Store'
import axios from 'axios'
export default function LoadPosts({children}) {

    useEffect(() => {
        axios.get('http://server.metaraw.world:3000/posts/get_all_posts')
        .then(res => {
            let postsMap = {}
            const posts = res.data.data
            for(var i = 0; i < res.data.data.length; i++) {
                let post = posts[i]
                postsMap[post.postId] = post
            }
            const action = {type: 'setPosts', data: {posts, postsMap}}
            store.dispatch(action)
        })
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}
