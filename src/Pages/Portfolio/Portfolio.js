import React , {useState} from 'react';
import {Tabs,Grid,Tab,CardContent,Card,
    CardMedia, CardActionArea,Grow, Typography,DialogActions,DialogContent,DialogTitle,Dialog} from "@material-ui/core"
import './Portfolio.css'   
import resumedata from '../../resumedata';

const Portfolio = () => {
const[tabValue,setTabValue] = useState('All');
const [projectDialog, setProjectDialog]=useState(false)


    return (
        <Grid container className='section pb_45 pt_45'>
            {/*title */}
            <Grid item className='section_title mb_30'>
                <span> </span>
                <h6 className='section_title_text'>Portfolio </h6> 
            
            </Grid>

                        {/*tabs*/}
            <Grid item xs={12}>
                <Tabs 
                value={tabValue} 
                indicatorColor='white' 
                className='customTabs' 
                onChange={(event,newValue)=> setTabValue(newValue)}>
            <Tab label="All" 
            value="All" 
            className={tabValue=='All'?'customTabs_item_active':'customTabs_item' 
         }
         />
                
                {[...new Set(resumedata.projects.map(item => item.tag))].map(
                    (tag) =>(
                    <Tab 
                    label={tag}
                     value={tag}
                    className={
                        tabValue=='All'
                        ?'customTabs_item_active'
                        :'customTabs_item'  
                    } 
                       />  
                )
                )}
                 </Tabs>
            </Grid>
            {/*Projects */}
           

            {/*projects*/}
            <Grid item xs={12}>
               <Grid container spacing={3}>
                   {resumedata.projects.map((project) => (   
                       <>
                       {tabValue == project.tag || tabValue =='All' ? (
                       <Grid item>
                           <Grow in timeout ={1000}>
                           <Card className='customCard' onClick={() => setProjectDialog(project)}>
                    <CardActionArea>
                        <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                        <CardContent>
                            <Typography className='customCard_title'>{project.title}</Typography>
                            <Typography variant='body2' className = 'customCard_caption'>{project.description}</Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                           </Grow>
               
            </Grid>
            ) : null }
            </>
         ))}
        </Grid>
        </Grid>
        <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog' >
        <DialogTitle oneClose={() => setProjectDialog(false)}>
            {projectDialog.title} 
            </DialogTitle>
            <img src={projectDialog.image} alt='' className="projectDialog_image"/>
            <DialogContent>
                <Typography className="projectDialog_description">{projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className='projectDialog_actions'>
              {projectDialog?.links?.map((link)=> (
    <a href={link.link} target='_blank ' 
    className='projectDialog_icon'> 
    {link.icon}
    </a>
))}
            </DialogActions>
    </Dialog>
        </Grid>
    );
};

export default Portfolio;
