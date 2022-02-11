import React,{useEffect, useState} from 'react'
import './Posts.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import DefaultSubredditLogo from './subredditDefaultLogo.png'

// import {Parser} from 'html-to-text'

function Posts(props) {
    const post = props.post
    const dispatch = useDispatch()
    const [subredditIcon, setSubredditIcon] = useState('')
    // const communityIcon = useSelector(state => state.GetSubredditIconAction)

    useEffect(() => {
        getSubredditIcon()        
    }, [])

    const handlePostType = () => {
        if (post.domain == 'i.redd.it') {
            return <img className='posts_details_body_image' src={post.preview.images[0].source.url}></img>
        } else if (post.domain == 'v.redd.it' && post.is_video) {
            return <ReactPlayer className='post_details_body_video' url={post.media.reddit_video.fallback_url} playing={true} loop={true} controls={true} volume={1}></ReactPlayer>
        } else {
            if (post.selftext == "") {
                return <span className='posts_details_body_link' style={{color:'#D7DADC'}}>{post.url_overridden_by_dest}</span>
            } else {
                return  <div className='posts_details_body_description' dangerouslySetInnerHTML={{__html: post.selftext_html}}>
                            
                        </div>
            }
        }
    }

    const epochToDate = () => {
        const currentTime = new Date();
        const postCreatedTime = (new Date(post.created_utc*1000))
        const dateDiffMili = currentTime.getTime() - postCreatedTime.getTime()
        const dateDiff = dateDiffMili/(1000*60*60)
        // console.log(post)
        return Math.round(dateDiff)
    }

    const getSubredditIcon = async () => {
        await fetch(`https://www.reddit.com/${post.subreddit_name_prefixed}/about.json`)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => {setSubredditIcon(res.data.community_icon.split("?")[0])})
    }

    const handleSubredditIcon = () => {
        if (subredditIcon == "") {
            return <img className='post_details_header_image' src={DefaultSubredditLogo}></img>
        } else {
            return <img className='post_details_header_image' src={subredditIcon}></img>
        }
    }


    return (
        <div className='posts'>
            <div className='posts_voting'>
                <ArrowUpwardIcon className='posts_voting_upvote'></ArrowUpwardIcon>
                <span className='posts_voting_count'>{post.ups}</span>
                <ArrowDownwardIcon className='posts_voting_downvote'></ArrowDownwardIcon>
            </div>
            <div className='posts_details'>
                <div className='posts_details_header'>
                    <div className='post_details_header_image'>
                        {handleSubredditIcon()}
                    </div>
                    <span style={{marginLeft: '3px', color: '#D7DADC', fontSize: '13px', fontWeight: 'bold'}}>{post.subreddit_name_prefixed}</span>
                    <span style={{margin: '0px 4px'}}>•</span>
                    <span style={{fontSize: '12px'}}>Posted by u/{post.author} {epochToDate()} hours ago</span>
                </div>
                <div className='posts_details_body'>
                    <span style={{fontSize: '18px', color: '#D7DADC', fontWeight: 'bold'}}>{post.title}</span>
                    {handlePostType()}
                </div>
                <div className='posts_details_footer'>
                    <div className='posts_details_footer_sub'>
                        <ChatBubbleOutlineIcon className='posts_details_footer_sub_icons'></ChatBubbleOutlineIcon>
                        <span>2 Comments</span>
                    </div>
                    <div className='posts_details_footer_sub'>
                        <ShareIcon className='posts_details_footer_sub_icons'></ShareIcon>
                        <span>Share</span>
                    </div>
                    <div className='posts_details_footer_sub'>
                        <BookmarkBorderOutlinedIcon className='posts_details_footer_sub_icons'></BookmarkBorderOutlinedIcon>
                        <span>Save</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
