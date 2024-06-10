import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {
    const [datas,changeData]=useState(
        {
    
          "name":""
        }
      )
      const inputHandler=(event)=>{
        changeData({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent