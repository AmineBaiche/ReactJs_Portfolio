import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { WebOutlined, AssignmentOutlined } from '@material-ui/icons';


export default {
    name :'Baiche Amine',
    title:'Admin Reseaux',
    birthday:' feb 1997',
    email : 'baicheamine7@gmail.com',
    address: 'LES ULIS 91940 ',
    phone:'0619888285',
    socials :{
        facebook: {
            link: 'https://google.fr',
            text:'mon facebook',
            icon: <FacebookIcon />,
        },
        Github: {
            link: 'https://github.com/AmineBaiche',
            text:'mon github',
            icon: <GitHubIcon />,
        },
    },
    about : "Actuellement \u00E9tudiant en Master 2 Informatique parcours R\u00E9seaux \u00E0 Sorbonne Universit\u00E9 (ex UPMC) , je suis \u00E0 la recherche d'un stage de  6 mois \u00E0 compter du 14 Fevrier pour ma derni\u00E8re ann\u00E9e de master \r\n \r\nPassion\u00E9 de programmation j'ai eu la chance de travailler dans le cadre de mes etudes sur de nombreux projets pouss\u00E9s que je liste dans la rubrique mon portfolio.\r\nCette meme passion me pousse chaque jour  \u00E0 travailler dans une d\u00E9marche proactive et \u00E0 developper plus mes competences, c'est dans ce cadre que j'ai r\u00E9alis\u00E9 bon nombre de petit projet que je liste aussi dans la rubrique.\r\n \r\n"
,
experiences: [
    {
        title:"STAGE programmation d'un controle de congestion de l'Internet-of-Things (IoT)  Google BBR Algorithm " ,
        lieu :" LABORATOIRE D’INFORMATIQUE PARIS 6" , 
        date:' \n 06/21 - 08/21',
        description:"Programmation d'un contr\u00F4le de congestion dans le protocole CoAP de l'Internet-of-Things (IoT) en se basant sur GOOGLE BBR ALGORITHM\r\nTest et simulation sur Cooja simulator\r\nProgrammation en C\r\n",
    },
    {
        title:'STAGE déploiement d’un réseau 4G/LTE' ,
        lieu :"ALGERIE TELECOM ",
        date:' \n 03/20 – 08/20',
        description:'     D\u00E9ploiement d\u2019un r\u00E9seau 4G\/LTE dans une zone blanche : \r\nSimulation radio  \r\nRapport visite technique  \r\nPr\u00E9paration de l\u2019infrastructure  \r\nInstallation d\u2019\u00E9quipement  \r\nMise en service \r\nDrive test  ',
    },
    {
        title:'TECHNICIEN HELPDESK' ,
        date:' \n 07/18 - 06/19',
        lieu :'GLOBAL INFO LAGA',
    },
],


education: [
    {
        title:"Master informatique parcours RESEAU " ,
        lieu : "Faculté des Sciences et Ingénierie. Jussieu, Paris",
        date:"\n 2020-2022",
        descrition:'Traffic Engineering and QOS ,  Network evolutions with virtualization and automation, network security, methode et outils pour la supervision des réseaux',
    },                  
    
    {
        title:'Master en télécommunication et réseau UMMTO ' ,
        lieu : "Université Mouloud Mammeri Tizi Ouzou, Algérie ",
        date:' \n 2018– 2020',
        descrition:'blalblla',
    },
    {
        title:'Licence en télécommunication ' ,
        lieu:'Université Mouloud Mammeri Tizi Ouzou, Algérie',
        date:' \n 2015– 2018',
        descrition:'blalblla',
    },
],
services:[
    {
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
        title: "C Programming",
        description:[
            'reactjs',
            'javascript',
            'Typescript',
            'Bootstrap',
            'Material Ui'
        ],
        level : '50',
    },
    {title:'Python ',
    description: ['firebase','sql server','mysql'],
    level : '45',
},
{title:'React js ',
    description: ['firebase','sql server','mysql'],
    level : '45',
},
],

projects:[
   
    {
        tag: 'Python',
        image: 'https://i.imgur.com/lK8m3IO.jpg',
        title:'Ultra high secure DHCP SERVER easy to configure',
        description:"this server works only on LINUX based on isc_dhcp_server ",
        links:[
            {link: "https://github.com/AmineBaiche/DhcpServer/", icon: <GitHubIcon/>},

        ],

    },
   {
        tag: 'Python',
        image: 'https://i.imgur.com/AVUx7ty.png',
        title:'Cooja Data analyser',
        description:"Easy way to plot data figure from Cooja simulator  ",
        links:[
            {link: "https://github.com/AmineBaiche/Contiki_Cooja_Data_analyser", icon: <GitHubIcon/>},

        ],

    },

    {
        tag: 'React JS',
        image: "https://i.imgur.com/mOvtmnq.jpg",
        title:'Portfolio ReactJS',
        description:"design moderne portfolio flexible écrit sous reactJS",
        links:[
            {link: "https://github.com/AmineBaiche/ReactJs_Portfolio", icon: <GitHubIcon/>},

        ],

    },
   
],
};