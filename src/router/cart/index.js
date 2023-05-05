import React from 'react'
import { useSelector } from 'react-redux'
function index() {

  return (
    <div className='index'>
        <div className="img">
            {
                cart?.map((i, inx)=> <div key={inx}>
                    <img src={i.url} alt="" />
                    </div>)
            }
        </div>
    </div>
  )
}

export default index