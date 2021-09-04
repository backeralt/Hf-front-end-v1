

import React from 'react'
import Body from './Body';
import { Grid } from '@material-ui/core';
import fileofbody from '../../products';

const Bodydata = () => {
        const getfurniturecard = product => {
       
    return (
            
        <Grid item xs={12} sm={6} md={4}>
           
        <Body key={product._id} product={product} />
          

        </Grid>
    )
}
       return (
           <div>
               <h2>You May like it</h2>
               <h2>Recommended products</h2>
               <Grid container spacing={0}>
            {fileofbody.products.map((product) => getfurniturecard(product))}
               </Grid>
        </div>
    )
}

export default Bodydata

// import React from 'react'
// import Body from './Body';
// import { Grid } from '@material-ui/core';
// import products from '../../__mocks__/products';

// const Bodydata = () => {
//         const getfurniturecard = furnitureobj => {
//         return (
            
//             <Grid item xs={12} sm={6} md={4}>
                
//                     <Body {...furnitureobj} />
//             </Grid>
//         )
//     }
    
//     return (
//         <div>
//         <h2>You May like it</h2>
//                 <Grid container spacing={0}>
//             {products.map(furnitureobj => getfurniturecard(furnitureobj))}
//         </Grid>
//         </div>
//     )
// }

// export default Bodydata
