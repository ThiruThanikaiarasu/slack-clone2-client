import React from 'react'
import ChannelWindowComponent from '../components/ChannelWindowComponent/ChannelWindowComponent'
import ChatComponent from '../components/ChatComponent/ChatComponent'

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-container">
                <ChannelWindowComponent/>
                <ChatComponent/>
            </div>
        </React.Fragment>
    )
}

export default Home