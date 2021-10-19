import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
        Linkedin: {
            link: 'https://google.fr',
            text:'mon linkedin',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://github.com/AmineBaiche',
            text:'mon github',
            icon: <GitHubIcon />,
        },
    },
    about : "Actuellement \u00E9tudiant en Master 2 Informatique parcours R\u00E9seaux \u00E0 Sorbonne Universit\u00E9 (ex UPMC) , je suis \u00E0 la recherche d'un stage de  6 mois en réseaux \u00E0 compter du 14 Fevrier pour ma derni\u00E8re ann\u00E9e de master \r\n \r\nPassion\u00E9 de programmation j'ai eu la chance de travailler dans le cadre de mes etudes sur de nombreux projets pouss\u00E9s que je liste (progressivement) dans la rubrique mon portfolio.\r\nCette meme passion me pousse chaque jour  \u00E0 travailler dans une d\u00E9marche proactive et \u00E0 developper plus mes competences, c'est dans ce cadre que j'ai r\u00E9alis\u00E9 bon nombre de petit projet que je liste aussi dans la rubrique.\r\n \r\n"
,
experiences: [
    {
        title:"STAGE programmation d'un controle de congestion de l'Internet-of-Things (IoT)  Google BBR Algorithm " ,
        lieu :" LABORATOIRE D’INFORMATIQUE PARIS 6" , 
        date:' \n 06/21 - 08/21   2 mois ',
        description:"\r \u2022\tProgrammation d'un contr\u00F4le de congestion dans le protocole CoAP de l'Internet-of-Things (IoT) en se basant sur GOOGLE BBR ALGORITHM\r\n \u2022\tTest et simulation sur Cooja simulator\r\n \u2022\tProgrammation en C\r\n",
    },
    {
        title:'STAGE chef de projet déploiement d’un réseau 4G/LTE' ,
        lieu :"ALGERIE TELECOM ",
        date:' \n 03/20 – 08/20  6 mois ',
        description:'  Supervision d\u2019un projet de d\u00E9ploiement d\u2019un r\u00E9seau 4G : \r\n\u2022\tSimulation radio sur la zone et choix du lieu de d\u00E9ploiement      \r\n\u2022\tR\u00E9alisation d\u2019un rapport visite technique    \r\n\u2022\tPr\u00E9paration de l\u2019infrastructure EnodeB  , Pylone ,  infrastructures \u00E9l\u00E9ctriques ..etc\r\n\u2022\tInstallation d\u2019\u00E9quipement r\u00E9seau mont\u00E9 en rack ,  amplificateurs RF, liaisons par fibre optique\t\t\t\r\n\u2022\tMise en service \t\t\r\n\u2022 \tR\u00E9alisation d\u2019un Drive test pour une inclinaison optimal des antennes et realisation de diff\u00E9rentes mesure sur la zone de couverture ( gain, interf\u00E9rence..etc)',
    },
    {
        title:'TECHNICIEN Informatique' ,
        date:' \n 07/18 - 06/19',
        lieu :'GLOBAL INFO LAGA',
        description:" \u2022 \tD\u00E9ploiement de r\u00E9seaux informatique pour les clients (entreprises , cybercaf\u00E9s , client particulier)\r\n \u2022\tInterventions techniques sur site  \r\n \u2022\tMaintenance des \u00E9quipements des sites (t\u00E9l\u00E9phonie, routeurs ADSL, imprimantes\u2026) \r\n \u2022\tProgrammation et déploiement de site web",
    },
],


education: [
    {
        title:"Master informatique parcours RESEAU " ,
        lieu : "Faculté des Sciences et Ingénierie. Jussieu, Paris",
        date:"\n 2020-2022",
        description:'ITQOS (Ingénierie de trafic et qualité de service),\r\nMEPS (Modélisation et évaluation de performances des systèmes)\r\n CELL (Réseaux cellulaires) \r\n PROGRES  (Programmation réseaux) ,\r\n ARES (Architecture des réseaux) \r\n RTEL  (Reseaux de telecommunications)',
    },                  
    
    {
        title:'Master en télécommunication et réseau UMMTO ' ,
        lieu : "Université Mouloud Mammeri Tizi Ouzou, Algérie ",
        date:' \n 2018– 2020 COVID',
        description:'Traitement de signal avanc\u00E9,T\u00E9l\u00E9phonie mobile,\r\nProgrammation orient\u00E9e objet c++ , s\u00E9curit\u00E9 des r\u00E9seaux , d\u00E9veloppement web .',
    },
    {
        title:'Licence en télécommunication ' ,
        lieu:'Université Mouloud Mammeri Tizi Ouzou, Algérie',
        date:' \n 2015– 2018',
        description:'El\u00E9ctronique,El\u00E9ctrotechnique,T\u00E9l\u00E9communication fondamental',
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
           
        ],
        level : '100',
    },
    {title:'Python ',
    description: ['pandas','NumPy'],
    level : '100',
},
{title:'JavaScript ',
    description: ['firebase','sql server','mysql'],
    level : '100',
},
{
    title: "SQL",
    description:[
       
    ],
    level : '100',
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
        {
            tag: 'C programming',
            image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Contiki-ipv6-rpl-cooja-simulation.png",
            title:'BBR Congestion Control Algorithm sur CoAp ( IoT)',
            description:"\u2022\tEtude des diff\u00E9rentes couches protocolaires d\u00E9velopp\u00E9es pour l'IoT et notamment celles implant\u00E9es dans Contiki: IEEE 802.15.4 ,CSMA, 6LoWPAN, IPv6, RPL, CoAP, MQTT.\r\n\u2022 \tD\u00E9veloppement et int\u00E9gration en C de deux am\u00E9liorations du contr\u00F4le de congestion (principe de BBR )\t\r\n\u2022\tTest du nouveau protocole CoAP sur COOJA SIMULATOR et analyse des donn\u00E9es en utilisant  python avec les librairies numPy Pandas Matplotlib ",
            links:[
            ],

    },
     {
            tag: 'UML',
            image: "https://pages.lip6.fr/Yann.Thierry-Mieg/IL/sigbHTML/Conception/images/_.kSYL.dB.o2E.d-.yM48.x.nY4BOQ.PNG",
            title:'Système Intégré de Gestion de Bibliothèque',
            description:"Le SIGB r\u00E9pertorie l'ensemble des documents constituant le fonds de la biblioth\u00E8que (plus de 50 000\r\ndocuments). Ce fonds est constitu\u00E9 actuellement de livres et de p\u00E9riodiques. Il est pr\u00E9vu que le fonds\r\ncontienne dans l'avenir d'autres cat\u00E9gories de documents.\r\nChaque document a un titre, une ann\u00E9e de publication, un \u00E9diteur, un court texte de description et une unique\r\nr\u00E9f\u00E9rence. Un livre a un (des) auteur (s), et un code ISBN (International Standard Book Number). Un\r\np\u00E9riodique a un volume, un num\u00E9ro ainsi qu'un code ISSN (International Standard Serial Number). ",
            links:[
            ],

    },


   
],
};