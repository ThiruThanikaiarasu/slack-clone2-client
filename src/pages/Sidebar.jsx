import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa";
import { IoIosMore, IoIosChatbubbles } from "react-icons/io";
import { IoHome, IoNotifications, IoChatbubblesOutline, IoHomeOutline } from "react-icons/io5";
import profile from '../assets/profile.png'
import Home from './Home';
import Chat from './Chat';
import Activity from './Activity';

const Sidebar = () => {
    
    const [activeIcon, setActiveIcon] = useState('home')

    const handleActiveIcon = (icon) => {
        setActiveIcon(icon)
    }

    return (
        <Router>
            <div className="container">
                <div className="sidebar">
                    <nav>
                        <Link 
                            to='/' 
                            onClick={() => handleActiveIcon("home")}
                            
                        >
                            { activeIcon == "home" 
                                ? 
                                    <span
                                        className={activeIcon === "home" ? "active" : "inactive"}
                                    >
                                        <IoHome/>
                                    </span>
                                : 
                                <span
                                    className={activeIcon === "home" ? "active" : "inactive"}
                                >
                                    <IoHomeOutline/>
                                </span>
                            }
                            
                            <p>Home</p>
                        </Link>

                        <Link 
                            to='/chat' 
                            onClick={() => handleActiveIcon("chat")}
                            
                        >
                            { activeIcon == "chat" 
                                ? 
                                    <span
                                        className={activeIcon === "chat" ? "active" : "inactive"}
                                    >
                                        <IoIosChatbubbles/>
                                    </span>
                                : 
                                <span
                                    className={activeIcon === "chat" ? "active" : "inactive"}
                                >
                                    <IoChatbubblesOutline/>
                                </span>
                            }
                            
                            <p>DMs</p>
                        </Link>

                        <Link 
                            to='/activity' 
                            onClick={() => handleActiveIcon("activity")}
                            
                        >
                            { activeIcon == "activity" 
                                ? 
                                    <span
                                        className={activeIcon === "activity" ? "active" : "inactive"}
                                    >
                                        <IoNotifications/>
                                    </span>
                                : 
                                <span
                                    className={activeIcon === "activity" ? "active" : "inactive"}
                                >
                                    <FaRegBell/>
                                </span>
                            }
                            
                            <p>Activity</p>
                        </Link>
                                    
                        <Link 
                            to=""
                            onClick={() => handleActiveIcon("more")}
                        >
                            <span
                                className={activeIcon === "more" ? "active" : "inactive"} 
                            >
                                <IoIosMore/>
                            </span>
                            <p>More</p>
                        </Link>
                    </nav>

                    <section>
                        <img src={profile} alt="profile"/>
                    </section>
                    
                </div>

                
                <div className="pages">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/chat' element={<Chat/>}/>
                        <Route path='/activity' element={<Activity/>}/>
                    </Routes>
                </div>
                
            </div>
              
        </Router>
    )
}

export default Sidebar