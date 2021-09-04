import React from 'react'
import Leftbar from './Leftbar';
import prodata from '../../promotion';

const SidebarData = () => {



    return (
        <div>
            <h2>Top products</h2>
             {prodata.products.map((product) => (
            <Leftbar key={product._id} product={product}/>
          
          ))}
                </div>
    )
}

export default SidebarData

// import React from 'react'
// import Leftbar from './Leftbar';
// import promotion from '../../__mocks__/promotion';


// const SidebarData = () => {

// const getfurniturecar = furnitureob => {
//     return (
            
//         <Leftbar {...furnitureob} />
// )
// }

//     return (
//         <div>
//             <h2>Most Visited Products</h2>
// {promotion.map(furnitureob => getfurniturecar(furnitureob))}

//             <Leftbar />
//                 </div>
//     )
// }

// export default SidebarData
