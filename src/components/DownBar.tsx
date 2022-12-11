import React, { FC } from 'react'
import { motion } from "framer-motion"
import { BiHome, BiUserCircle, BiImage, BiSearch } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import { linkAnim, textAnimLast } from '../utils/Animation'
const DownBar: FC = () => {
    const location = useLocation().pathname
    console.log(location)
    return (
        <div className='downbar'>
            <div className='container'>

                <Link to="/">
                    <motion.div className='part home' variants={linkAnim} initial="hidden" animate={`${location === "/" && "show"}`}>
                        <BiHome className={location === "/" ? "active" : ""} />
                        <motion.span variants={textAnimLast} initial="hidden" animate={`${location === "/" && "show"}`}>
                            Home
                        </motion.span>
                    </motion.div>
                </Link>
                <Link to="/search">
                    <motion.div className='part search' variants={linkAnim} initial="hidden" animate={`${location === "/search" && "show"}`}>
                        <BiSearch className={location === "/search" ? "active" : ""} />
                        <motion.span variants={textAnimLast} initial="hidden" animate={`${location === "/search" && "show"}`}>
                            Search
                        </motion.span>
                    </motion.div>
                </Link>
                <Link to="/posts">
                    <motion.div variants={linkAnim} initial="hidden" animate={`${location === "/posts" && "show"}`} className="part posts">
                        <BiImage className={location === "/posts" ? "active" : ""} />
                        <motion.span variants={textAnimLast} initial="hidden" animate={`${location === "/posts" && "show"}`} >
                            Posts
                        </motion.span>
                    </motion.div>
                </Link>
                <Link to="/profile">
                    <motion.div className='part profile' variants={linkAnim} initial="hidden" animate={`${location === "/profile" && "show"}`} >
                        <BiUserCircle className={location === "/profile" ? "active" : ""} />
                        <motion.span variants={textAnimLast} initial="hidden" animate={`${location === "/profile" && "show"}`}>
                            Profile
                        </motion.span>
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}

export default DownBar