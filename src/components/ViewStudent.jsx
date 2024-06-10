import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data,changeData]=useState(
        [
            {
                "name":"shilpa",
                "rollNo":21,
                "admNo":125,
                "college":"fisat"
            },
            {
                "name":"sona",
        "rollNo":22,
        "admNo":126,
        "college":"tkm"
            }
        ]
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                       {data.map(
                        (value,index)=>{
                            return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card" >
                                <img src="https://pbs.twimg.com/media/EeUI99bUcAMiRFa.jpg:large" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Name:{value.name}</h5>
                                    <h5 className="card-title">Roll no{value.rollNo}</h5>
                                    <p className="card-text">Adm no:{value.admNo}</p>
                                    <p className="card-text">college:{value.college}</p>
                                   
                                    <a href="#" className="btn btn-primary">Biodata</a>
                                </div>
                            </div>
                            </div>
                        }
                       )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent