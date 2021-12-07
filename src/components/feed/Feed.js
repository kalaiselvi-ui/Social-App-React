import React, {useState, useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
// import {Posts} from '../../dummyData';
import './Feed.css';
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
            const fetchPosts = async() => {
                const res = await axios.get('posts/timeline/61a4a7127de33f500cc3cf88');
                setPosts(res.data);    
            };
            fetchPosts();
                },
                []);
    return (
        <div className="feed">
      
            <div className="feedwrapper">
                <Share />
                {posts.map((p) =>
                (
                    <Post key={p.id} post={p} />
                ))}             
            </div>
        </div>
    )
}

export default Feed
