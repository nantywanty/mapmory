// import React from 'react';

// function Footer() {
//   return (
//     <div>
        
//     </div>
//   )
// };

import SimpleReactFooter from "simple-react-footer";

function Footer() {

    const description = "Created by Nant and Tomohisa as a project for the NUS IT5007 course, MAPMORY seeks to redefine how photos are stored and displayed. You can now relive their your adventures in an intuitive and visual manner any time, anywhere. Try it for free today!";
    const title = "About Mapmory";
    const columns = [
        // {
        //     title: "Resources",
        //     resources: [
        //         {
        //             name: "About",
        //             link: "/about"
        //         },
        //         {
        //             name: "Careers",
        //             link: "/careers"
        //         },
        //         {
        //             name: "Contact",
        //             link: "/contact"
        //         },
        //         {
        //             name: "Admin",
        //             link: "/admin"
        //         }
        //     ]
        // },
        // {
        //     title: "Legal",
        //     resources: [
        //         {
        //             name: "Privacy",
        //             link: "/privacy"
        //         },
        //         {
        //             name: "Terms",
        //             link: "/terms"
        //         }
        //     ]
        // },
        // {
        //     title: "Visit",
        //     resources: [
        //         {
        //             name: "Locations",
        //             link: "/locations"
        //         },
        //         {
        //             name: "Culture",
        //             link: "/culture"
        //         }
        //     ]
        // }
    ];
    return <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook=""
        twitter=""
        instagram=""
        youtube="?"
        pinterest=""
        copyright="MINT"
        iconColor="grey"
        backgroundColor="white"
        fontColor="grey"
        copyrightColor="darkgrey"
     />;
};

export default Footer;