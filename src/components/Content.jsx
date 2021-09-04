import React from 'react';
import "./Context.css";
import SideBarData from './sideBar/SidebarData';
import Bodydata from './body/Bodydata';


const content = () => {
    return (
<div className={"container"}>
            <section className={"body"}>
                <Bodydata />
            </section>
            <section  className={"leftbar"}>
                <SideBarData />
            </section> 
                {/* <Leftbar /> */}
                </div>
    )
}

export default content





// import React from 'react';
// import "./Context.css";
// import SideBarData from './sideBar/SidebarData';
// import Bodydata from './body/Bodydata';


// const content = () => {
//     return (
// <div className={"container"}>
//             <section className={"body"}>
//                 <Bodydata />
//             </section>
//             <section  className={"leftbar"}>
//                 <SideBarData />
//             </section> 
//                 {/* <Leftbar /> */}
//                 </div>
//     )
// }

// export default content


