import React from 'react'


function BreadCrumps(props) {
  return (


    
    
    <div>




        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white animated slideInDown">{ props.titulo }</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">{ props.nome }</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default BreadCrumps
