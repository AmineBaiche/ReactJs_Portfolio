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
                    Designed by me  <a href="/" target='_blank'>Amine baiche </a>
                <br/>
                clone idea from me <a href="google.fr" target='_blank'> not mine </a> 
                </Typography>
            </div>
        </div>
    )
}

export default Footer
