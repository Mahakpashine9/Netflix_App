import React from 'react';
import ReactDOM from 'react-dom';

import Cards from "./Cards";



// import Sdata from "./Sdata";

// function nCard(val) {
//   return (
//     <div>    
//     <h1 className="heading_style"> List of top 5 Netflix Series </h1>
//       <Card imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.links}
//       />
//     </div>
//   );
// }

ReactDOM.render(
  <Cards/>,
  document.getElementById('root')
);