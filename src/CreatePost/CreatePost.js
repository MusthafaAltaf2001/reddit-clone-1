import React from 'react'
import './CreatePost.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import LinkIcon from '@mui/icons-material/Link';

function CreatePost() {
    return (
        <div className='createpost'>
            <AccountCircleIcon style={{width: '50px', height: '50px'}}/>
            <Input
                sx={{color:'#d7dadc'}}
                className='createpost_input'
                placeholder='   Create Post'
            />
            <PermMediaOutlinedIcon className='createpost_media'/>
            <LinkIcon className='createpost_url'/>
        </div>
    )
}

export default CreatePost
