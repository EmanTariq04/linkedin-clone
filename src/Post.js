import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post = forwardRef(( { name, description, message, photoUrl }, ref) => {


  return (
    <div ref={ref} className='post'>
        <div className='post-header'>
            <Avatar src={photoUrl}> {name} </Avatar> 
            <div className='post-info'>
                <h2> {name} </h2>
                <p> {description} </p>
            </div>
        </div>

        <div className='post-body'>
            <p> {message} </p>
            </div>

            <div className='post-buttons'>
              <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
              <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
              <InputOption Icon={RepeatIcon} title="Repost" color="gray" />
              <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />

            </div>
      </div>
  )
})

export default Post