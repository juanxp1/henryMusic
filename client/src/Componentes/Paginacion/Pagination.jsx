import React from 'react'

function Pagination() {
    return (
        <div className='fixed container-fluid'>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled ">
                        <a className="page-link bg-dark text-light">Anterior</a>
                    </li>
                    <li className="page-item "><a className="page-link bg-dark text-light" href="#">1</a></li>
                    <li className="page-item"><a className="page-link bg-dark text-light" href="#">2</a></li>
                    <li className="page-item"><a className="page-link bg-dark text-light" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link bg-dark text-light" href="#">Siguiente</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination