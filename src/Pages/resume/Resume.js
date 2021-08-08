import { Typography, Grid,Icon,Paper, TextField } from '@material-ui/core'
import React , { useState } from "react";
import resumedata from '../../resumedata';
import CustomTimeline, { CustomTimelineSeparator } from '../../Component/timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from '../../Component/button/button'
import './resume.css'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import ProgressBar from 'react-bootstrap/ProgressBar'

export const Resume = () => {
    return ( <>
        {/* About me*/}
        <Grid container className = 'section pb_45 pt_45 aboutme_text'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6   className='section_title_text '>  About me </h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' ClassName='aboutme_text'>
                         {resumedata.about}
                     </Typography>
                </Grid>
        </Grid>
        {/* Education experience*/}

         <Grid container className = 'section pb_45'>
             <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className="section_title_text"> Resume </h6>
          </Grid>
          <Grid item xs={12}>
              <Grid container className='resume_timeline'>
                        {/*Education */}
                        <Grid item sm={12} md={6}>
                  <CustomTimeline title="Etude" icon={<SchoolIcon/>}>
                          {resumedata.education.map((education)=> (
                          <TimelineItem>
                              <CustomTimelineSeparator/>
                                  <TimelineContent className='timeline_content'>
                                  <Typography className='timeline_title'>
                                      {education.title}
                                  </Typography>
                                  <Typography variant='caption'className= 'timeline_lieu'>
                                      {education.lieu}
                                  </Typography>
                                  <Typography variant='caption'className= 'timeline_date'>
                                      {education.date}
                                  </Typography>
                                  <Typography variant="body2" className= 'timeline_description'>
                                      {education.description}
                                  </Typography>
                              </TimelineContent>
                          </TimelineItem>
                          ))}
                           </CustomTimeline>
                  </Grid>



                  {/*Experiences */}
                  <Grid item sm={12} md={6}>
                      <CustomTimeline title="Expérience professionelle" icon={<WorkIcon/>}>
                          {resumedata.experiences.map((experiences)=> (

                          <TimelineItem>
                              <CustomTimelineSeparator/>
                                  <TimelineContent className='timeline_content'>
                                  <Typography className='timeline_title'>
                                      {experiences.title}
                                  </Typography>
                                  <Typography variant='caption'className= 'timeline_lieu'>
                                      {experiences.lieu}
                                  </Typography>
                                  <Typography variant='caption'className= 'timeline_date'>
                                      {experiences.date}
                                  </Typography>
                                  <Typography variant="body2" className= 'timeline_description'>
                                      {experiences.description}
                                  </Typography>
                              </TimelineContent>
                          </TimelineItem>
                          ))}
                           </CustomTimeline>
                  </Grid>
                
                 

              </Grid>
          </Grid>
                  
</Grid>
{/* Mes projets
            <Grid container className = 'section pb_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className="section_title_text"> mY Services </h6>
          </Grid>
          <Grid item xs={12}>
              <Grid container spacing={3} justify='space-around'>
                  {resumedata.services.map((service) => (
                  <Grid item xs={12} sm={6} md={3}>
                      <div className='service'>
                          <Icon className='service_icon'>{service.icon} </Icon>
                          <Typography  className='service_title' variant='h6'>
                              {service.title}</Typography>
                          <Typography className='service_description' variant='body2'>
                              {service.description}</Typography>

                          </div>
                          </Grid> ))}
              </Grid>
          </Grid>
            </Grid>             */}

                  {/* skills*/}

            <Grid 
            container 
            justify="space-between"
            className = 'section graybg pb_45 p_50'>
                <Grid item xs={12}>
                    <Grid container>
                        
                    </Grid>
                </Grid>
                    {resumedata.skills.map((skill) => ( 
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skills_title'>
                            {skill.title}
                        </Typography>
                            <Typography variant='body2' className='skill_description'>
                                <ProgressBar   
                                max={100} 
                                now={skill.level}  
                                visuallyHidden={"true"}  

                                animated={"true"}
                                striped={"true"} 
                                 className='timeline_dot '  />


                            </Typography> 

                         </Paper>
                     </Grid>
                    ))}
          </Grid>
             {/* Contact*/}

             <Grid container className = 'section pt_45 pb_45'>
                 <Grid item xs={12} lg={5}  >
                            <Grid container > 
                <Grid item className='section_title mb_30'>
                                    <span></span>
            <h6 className='section_title_text'> Contact form </h6>
                                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing ={3}> 
                    <Grid item xs={12} sm={6}>
                       <TextField fullWidth name='name' label ='Name' /> 
                    </Grid>
                    <Grid item xs={12} sm={6}>
                       <TextField fullWidth name='email' label ='E-mail' /> 
                    </Grid>
                    <Grid item xs={12}>
                       <TextField fullWidth name='message' label ='Message' multiline rows={4} /> 
                    </Grid>
                    <Grid item xs={12}>
                        <CustomButton text="Submit" />
                    </Grid>
                    </Grid>
                </Grid>
                
                </Grid>
                            </Grid>

                       
                {/* Contact information */}
  
                 <Grid item xs={12} lg={5}>
                     <Grid container>
                         <Grid item className='section_title mb_30'>
                             <span></span>
                             <h6 className='section_title_text'> Contact information</h6>
                         </Grid>

                             <Grid item xs={12} >
                             <Grid container spacing={2}>
                                 <Grid item xs={12} >
                                     <Typography className='contactInfo_item'> 
                                     <span>Address:</span> {resumedata.address}
                                     </Typography>
                                 </Grid>
                                 <Grid item xs={12}>
                                     <Typography className='contactInfo_item'> 
                                     <span>Phone:</span> {resumedata.phone}
                                     </Typography>
                                 </Grid>
                                 <Grid item xs={12}>
                                     <Typography className='contactInfo_item'> 
                                     <span>Email:</span> {resumedata.email}
                                     </Typography>
                                 </Grid>    
                                 </Grid>     
                        </Grid>

                     <Grid item xs={12}>
                            <Grid container className="contactInfo_socialsContainer">
                                {Object.keys(resumedata.socials).map((key)=> (
                                    <Grid item className='contactInfo_social'>
                                        <a href={resumedata.socials[key].link}>
                                             {resumedata.socials[key].icon} </a>
                                        </Grid>
                                )
                                    )}
                            </Grid>

</Grid>


                     </Grid>
                 </Grid>
          </Grid>
            </>
    );
};
export default Resume;

