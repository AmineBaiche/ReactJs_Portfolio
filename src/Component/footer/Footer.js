import { Typography } from '@material-ui/core'
import React from 'react'
import'./Footer.css'
import resumedata from '../../resumedata'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className="footer_name"> {resumedata.name} </Typography>

            </div>

            <div className = 'footer_right'>
                <Typography className ='footer_copyright'>
                    Designed by  <a href="/" target='_blank'>Amine baiche </a>
                <br/>
               all copyright goes to Amine Baiche  <a href="google.fr" target='_blank'> AmineBaiche</a> 
                </Typography>
            </div>
        </div>
    )
}

export default Footer
