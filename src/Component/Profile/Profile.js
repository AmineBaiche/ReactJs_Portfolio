import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../timeline/Timeline';
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import "./Profile.css";
import resumedata from '../../resumedata' ;
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from '../button/button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({title,text,link}) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
           {link ? (
           <Typography className="timelineItem_text">
                <span>{title}:</span>{" "} 
                <a href={link} target='_blank'> 
                {text}
                </a>
                </Typography>
                    ) : (
                    <Typography className="timelineItem_text">
                        <span>{title}:</span> {text}
                    </Typography>
                
           )}
        </TimelineContent>
    </TimelineItem>
    );


const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'> {resumedata.name} </Typography>
                <Typography className='title'> {resumedata.title} </Typography>

            </div>
            
            <figure className="profile_image">
                <img src={require("../../assets/img/maphoto.jpg")} alt="" />
            </figure>

        <div className='profile_information'>
                <CustomTimeline icon ={<PersonOutlineOutlinedIcon/>}>
                <CustomTimelineItem title = 'Name' text={resumedata.name} />
                <CustomTimelineItem title = 'Title' text={resumedata.title} />
                <CustomTimelineItem title = 'Email' text={resumedata.email} />
                {Object.keys(resumedata.socials).map(key => (
                    <CustomTimelineItem 
                    title={key} 
                    text={resumedata.socials[key].text} 
                    link={resumedata.socials[key].link}
                    />
              
                      ))}
                
            </CustomTimeline>
            <br />
            <div className="button_container" style={{display:"flex"}}>
                    <CustomButton text={'Download Cv'} icon={<GetAppIcon/>} />
                       </div>
            </div>
        </div>
    );
}

export default Profile;
