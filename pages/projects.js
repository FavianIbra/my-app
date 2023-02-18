// import React, { Component } from 'react';
// import Projects from '../comps/project/project';
// import Link from 'next/link'

// // import AK from '../public/svg/ak.svg';
// // import PLPC from '../public/svg/plpc.svg';
// // import Hal from '../public/svg/hal9000m.svg';
// // import Tipper from '../public/svg/tipper.svg';
// // import IP from '../public/svg/ip-tracker.svg';


// export default class ProjectData extends Component {
//   state = {
//     projects: [
//       {
//         title: 'This Site',
//         logo: <AK style={{ fill: 'white' }} />,
//         icons: [
//           <i className="icon-html5" title="HTML5" key="1"></i>,
//           <i className="icon-sass" title="SCSS" style={{ color: "#CC6699" }} key="2"></i>,
//           <i className="icon-javascript" title="Javascript" key="3"></i>,
//           <i className="icon-react" title="React" key="4"></i>,
//           <i className="icon-next-js" title="Next.js" key="5"></i>,
//           <i className="icon-node-js" title="Node.js" key="6"></i>
//         ],
//         description: 'My portfolio site, showcasing my work and personal projects',
//         buttons: [
//           <Link href="https://github.com/AceGK/portfolio" className="btn" target="_blank" rel="noreferrer" key="1">
//             <i className="icon-github" title="Github"></i> Github
//           </Link>
//         ],
//         id: 1
//       },
//       {
//         title: 'Purple Lotus',
//         logo: <PLPC />,
//         icons: [
//           <i className="icon-html5" title="HTML5" key="1"></i>,
//           <i className="icon-css3" title="CSS3" key="2"></i>,
//           <i className="icon-javascript" title="Javascript" key="3"></i>,
//           <i className="icon-wordpress" title="Wordpress" key="4"></i>,
//           <i className="icon-php" title="php" key="5"></i>,
//         ],
//         description: 'Ecommerce website for a cannabis dispensary located in San Jose, CA. Currently being rebuilt with Next.js',
//         buttons: [
//           <Link href="https://plpcsanjose.com" className="btn" target="_blank" rel="noreferrer" key="1">
//             <i className="icon-link" title="view site"></i> View
//           </Link>,
//         ],
//         id: 2
//       },
//       {
//         title: 'IP Tracker',
//         logo: <IP style={{ fill: 'white' }} />,
//         icons: [
//           <i className="icon-html5" title="HTML5" key="1"></i>,
//           <i className="icon-sass" title="SCSS" style={{ color: "#CC6699" }} key="2"></i>,
//           <i className="icon-javascript" title="Javascript" key="3"></i>,
//           <i className="icon-react" title="React" key="4"></i>,
//           <i className="icon-next-js" title="Next.js" key="5"></i>,
//           <i className="icon-node-js" title="Node.js" key="6"></i>
//         ],
//         description: 'IP address tracker built with NextJS, Ipify Geolocation API, and LeafletJS',
//         buttons: [
//           <Link href="https://ip-tracker-acegk.vercel.app/" className="btn" target="_blank" rel="noreferrer" key="1">
//             <i className="icon-link" title="view site"></i> View
//           </Link>,
//           <Link href="https://github.com/AceGK/ip-tracker" className="btn" target="_blank" rel="noreferrer" key="2">
//             <i className="icon-github" title="Github"></i> Github
//           </Link>
//         ],
//         id: 3
//       },
//       {
//         title: 'Tip Calculator',
//         //logo: <Tipper style={{ fill: 'white' }} />,
//         icons: [
//           <i className="icon-html5" title="HTML5" key="1"></i>,
//           <i className="icon-css3" title="CSS3" key="2"></i>,
//           <i className="icon-javascript" title="Javascript" key="3"></i>,
//         ],
//         description: 'A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %',
//         buttons: [
//           <Link href="https://acegk.github.io/tip-calculator/" className="btn" target="_blank" rel="noreferrer" key="1">
//             <i className="icon-link" title="view site"></i> View
//           </Link>,
//           <Link href="https://github.com/AceGK/tip-calculator" className="btn" target="_blank" rel="noreferrer" key="2">
//             <i className="icon-github" title="Github"></i> Github
//           </Link>
//         ],
//         id: 4
//       },
//       {
//         title: 'HAL Rainmeter',
//         logo: <Hal />,
//         icons: [
//           <i className="icon-rainmeter" title="Rainmeter" key="1"></i>,
//           <i className="icon-lua" title="LUA" key="2"></i>
//         ],
//         description: 'Rainmeter skin modeled after HAL 9000 that monitors PC performance status and details',
//         buttons: [
//           <Link href="https://github.com/AceGK/Hal9000-Rainmeter" className="btn" target="_blank" rel="noreferrer" key="1">
//             <i className="icon-github" title="Github"></i> Github
//           </Link>,
//         ],
//         id: 5
//       },

//     ]
//   }
//   render() {
//     return (
//       <div className="page-container">
//         <Projects projects={this.state.projects} />
//       </div>
//     );
//   }
// }
