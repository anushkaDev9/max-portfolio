import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile from './profile.jpeg'
export const assets = {
    profile,
     user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};
export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: ['Python', 'SQL', 'Excel', 'Qualtrics', 'Figma','A/B Testing',"Data Visualization",'Usability Testing','User Feedback Analysis'] },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: [
         {
         id1:1,
         degree:"Bachelor's Degree in Economics",
        year:"2027",
        college:"San Jose State University"
    }
        ,{
        id1:2,
       degree:"Associate's Degree in Economics and Business",
        year:"2022",
        college:"Foothill College"
    }
   

]},
    
    { icon: assets.mail_icon, iconDark: assets.project_icon_dark, title: 'Links', description: [{
        id:2,
        linkedln:"https://www.linkedin.com/in/maximiliano-villa-69b906216/"
    },

] }
];

export const workData = [
{
  id:1,
  role:"UX Research Moderator (On-Site)",
  company:"Tata Elxsi",
  date:"2025 - 2026",
  points:[
    "Analyzed qualitative and behavioral data from 15+ user research sessions",
    "Identified usability trends, friction points, and unmet user needs",
    "Translated insights into product recommendations across 3–5 teams",
    "Collaborated with PMs, designers, and engineers to improve workflows",
    "Synthesized research into clear reports for data-driven decisions"
  ],
  skills:['A/B Testing','User Interviews','Usability Testing','User Feedback Analysis']
},
{
  id:2,
  role:"Operations Coordinator (Hybrid)",
  company:"Tata Elxsi",
  date:"2025 - 2025",
  points:[
    "Conducted inspections for 65+ residential and commercial properties",
    "Created 30+ detailed reports using Excel, photos, and videos",
    "Coordinated with vendors and teams to ensure project readiness",
    "Developed floor plans including emergency and fire routes"
  ],
  skills:['Microsoft Excel','PowerPoint','Operations','Research']
},
{
  id:3,
  role:"Sales Ambassador (On-site)",
  company:"Company Name",
  date:"Sep 2023 - Feb 2024",
  points:[
    "Engaged with high-volume users to gather real-time feedback",
    "Identified recurring UX pain points",
    "Collaborated with teams to improve workflows and CX"
  ],
  skills:['Customer Experience','UX Feedback']
}
]

export const projects=[
    {
    id:1,
    name:"User Engagement Analytics Platform",
    description:"Built a data-driven analytics platform to monitor and analyze user behavior within a web application. The system tracks key engagement metrics such as user clicks and session duration, providing actionable insights into how users interact with features. Developed an interactive dashboard to visualize feature usage and identify trends. Implemented SQL queries to analyze and report the most and least used features, helping guide product decisions. Additionally explored A/B testing to evaluate UI changes and optimize user experience.",
    stack:["SQL (data analysis, aggregation queries),Data Visualization,User Behavior Tracking,A/B Testing Concepts"],
    
    },
      {
    id:2,
    name:"Sales Data Analysis and Dashboard",
    description:"Cleaned and structured raw sales data (1,000+ rows) using Excel functions (VLOOKUP, IF, data validation) to ensure accuracy Analyzed revenue trends, regional performance, and top-selling products using pivot tables to uncover key business insights Designed an interactive dashboard with slicers and charts to track KPIs such as total revenue, monthly growth, and product performance Identified key insights, including peak sales periods, high-performing regions, and underperforming product categories",
    stack:["SQL (data analysis, aggregation queries),Data Visualization,User Behavior Tracking,A/B Testing Concepts"],
    
    },
     {
    id:3,
    name:"Improving Mobile App Onboarding Experience",
    description:"Conducted usability testing sessions to evaluate the first-time user onboarding experience and identify drop-off points Analyzed user behavior to uncover frictions in onboarding flows, including confusion in initial setup steps Synthesized qualitative findings into key insights and usability issues Created a user journey map highlighting onboarding pain points",
    stack:["SQL (data analysis, aggregation queries),Data Visualization,User Behavior Tracking,A/B Testing Concepts"],
    
    },


]
export const certifications = [
  {
    id: 1,
    title: "Foundations of Project Management",
    issuer: "Google / Coursera",
    date: "January 14, 2023",
    hours: "13 hours",
    description: "Completed verified training covering project management roles, responsibilities, life cycles, and methodologies.",
    skills: ["Project Management", "Planning", "Agile", "Organization"],
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/747EFGMM6DYF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    image: "/certificate-image.png"
  },
  {
  id: 2,
  title: "Excel Basics for Data Analysis",
  issuer: "IBM / Coursera",
  date: "April 2, 2026",
  hours: "12 hours",
  description: "Learned core Excel skills including data entry, cleaning, formulas, filtering, sorting, and pivot tables for data analysis.",
  skills: ["Excel", "Data Cleaning", "Pivot Tables", "Formulas", "Data Analysis"],
  credentialLink: "https://www.coursera.org/account/accomplishments/verify/7W3C6M0SH9QE",
  image: "/excel-cert.png"
}
]
