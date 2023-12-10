import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaChevronDown, FaLock, FaChevronRight } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { Collapse } from 'react-collapse'
import data from '../../data/channelListData'




const ChannelWindowComponent = () => {

    const [isOpenedChannel, setIsOpenedChannel] = useState(true)
    const [isOpenedDm, setIsOpenedDm] = useState(true)

    const handleCollapseChannels = () => {
        setIsOpenedChannel(!isOpenedChannel)
    }

    const handleCollapseDm = () => {
        setIsOpenedDm(!isOpenedDm)
    }

    return (
        <div className="channel-window">
            <header>
                <div className="title-container">
                    <h3 className='title'>Saveetha Engineering College</h3>
                    <span><FaChevronDown/></span>
                </div>
                <span><IoFilter/></span>
                <span><HiOutlinePencilAlt/></span>

            </header>

            <main>
                <div className="channel__thread">

                </div>

                <div className="channel__channels">
                    <div 
                        className="channels-title"
                        onClick={handleCollapseChannels}
                    >
                        <span>
                            { isOpenedChannel ? 
                                    <FaChevronRight/> 
                                :
                                    <FaChevronDown/>
                            }
                        </span>

                        <h3>Channel</h3>
                    </div>
                    <Collapse isOpened={isOpenedChannel}>
                        { data && data.map( (channel, index) => (
                            <div
                                className="channels-list"
                                key={index}
                            >
                                <span><FaHashtag/></span>
                                <li>{channel.channelTitle}</li>
                            </div>
                        ))}
                    </Collapse>
                </div>

                <div className="channel__dm">

                    <div 
                        className="channels-title"
                        onClick={handleCollapseDm}
                    >
                        <span>
                            { isOpenedDm ? 
                                    <FaChevronRight/> 
                                :
                                    <FaChevronDown/>
                            }
                        </span>

                        <h3>Direct message</h3>
                    </div>

                    <Collapse isOpened={isOpenedDm}>
                        { data && data[0].members.map( (channel, index) => (
                            <div
                                className="channels-list"
                                key={index}
                            >
                                <span><FaHashtag/></span>
                                <li>{channel}</li>
                            </div>
                        ))}
                    </Collapse>
                </div>
            </main>
        </div>
    )
}

export default ChannelWindowComponent