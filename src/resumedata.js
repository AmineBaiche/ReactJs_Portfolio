import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { WebOutlined, AssignmentOutlined } from '@material-ui/icons';


export default {
    name :'Baiche Amine',
    title:'Admin Reseaux',
    birthday:'',
    email : 'a',
    address: 'alg',
    phone:'',
    socials :{
        facebook: {
            link: 'https://google.fr',
            text:'mon facebook',
            icon: <FacebookIcon />,
        },
        Github: {
            link: 'https://google.fr',
            text:'mon github',
            icon: <FacebookIcon />,
        },
    },
    about : "Actr que",
experiences: [
    {
        title:"STArole de congestion " ,
        lieu :"LABORA" , 
        date:'\n 06/21 - 08/21',
        description:"Pr",
    },
    {
        title:"STAGE :  \n Déploie  " ,
        lieu :"AL" , 
        date:'\n 03/20 – 09/20',
        description:"D",
    },
    {
        title:'TECdsdK' ,
        lieu :"GLOA" , 
        date:' \n07/18 - 06/19 ',
        description:"M",
    },
],


education: [

    {
        title:'MdsdO ' ,
        lieu : "Usda ",
        date:' \n 2018– 2020',
        descrition:'blalblla',
    },

],
services:[
    {

    
        
          
    

        
    
    @@ -74,75 +86,62 @@ services:[
  
        title: 'webdev',
        description:'I have been a badas dev',
        icon: <WebOutlined/>
    },
    {
        title: 'one dev ',
        description:'I have been a badas dev',
        icon: <AssignmentOutlined />,
    },
    {
        title: 'web Dev',
        description:'I have been a badas dev',
        icon: <WebOutlined/>,
    },
],
skills:[
    {
        title: "C programming",
        level:"53",
        description:[
            'reactjs',
            'javascript',
            'Typescript',
            'Bootstrap',
            'Material Ui'
        ],
    },
    {title:'Python',
    level:"53",

    description: ['firebase','sql server','mysql'],
},
{title:'React JS ',
level:"43",

    description: ['firebase','sql server','mysql'],
},
],

projects:[
    {
        tag:'C programming',
        image:'abouc',
        title:"Controle de congestion pour IoT (Google's BBR)",
        description:"Imsdsds ",
        links:[
            {link: "https://www.google.fr", icon: <FacebookIcon/>},
                     {link: "https://www.google.fr", icon: <FacebookIcon/> },    
                          ],

    },
    {
        tag: 'Python',
        image: '',
        title:"Servessdsions attacks ",
        description:" ",
        links:[
            {link: "https://www.google.fr", icon: <FacebookIcon/>},
            {link: "https://www.google.fr", icon: <FacebookIcon/>},

        ],

    },
    {
        tag: 'React JS',
        image: '',
        title:'Portfolio ReactJS ',
        description:"design modern portfolio flexible ecrit sous reactJS",
        links:[
            {link: "https://www.google.fr", icon: <FacebookIcon/>},
            {link: "https://www.google.fr", icon: <FacebookIcon/>},

        ],

    },
    {
        tag: 'Some graphic stuff',
        image: '',
        title:'Projet 28',
        description:"rss",
        links:[
            {link: "https://www.google.fr", icon: <FacebookIcon/>},
            {link: "https://www.google.fr", icon: <FacebookIcon/>},

        ],

    },
],
};
