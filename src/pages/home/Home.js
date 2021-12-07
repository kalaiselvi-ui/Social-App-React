import React from 'react';
import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
    return (
        <div>
           <Topbar />
           <div className="home-container">
               <Sidebar />
               <Feed />
               <Rightbar />
           </div>
        </div>
    )
}

export default Home;
