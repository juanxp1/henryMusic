// import React from 'react'

// function Pagination({albumsPerPage, totalAlbums}) {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <div className='fixed container-fluid'>
//             <nav aria-label="Page navigation example">
//                 <ul className="pagination justify-content-center">
//                     <li className="page-item disabled">
//                         <a className="page-link bg-dark text-light">Anterior</a>
//                     </li>
//                     {
//                         pageNumbers.slice(0, 9).map(number => (
//                             <li key={number} className="page-item">
//                                 <a className="page-link bg-dark text-light" href="#">
//                                     {number}
//                                 </a>
//                             </li>
//                         ))
//                     }
//                     <li className="page-item">
//                         <a className="page-link bg-dark text-light" href="#">Siguiente</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Pagination
