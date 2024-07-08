import React from 'react'
import {  useSelector } from 'react-redux'
import { FruitSelector } from './Store/fruitSelector'

import {Link} from 'react-router-dom'

function ListeFruit() {
    const fruits = useSelector(FruitSelector) ; 
   
  
   
    const FruitMAP= fruits.map((fruit , key )=>{
      return <tr key={key}>
              <td  > {fruit.id}  </td>
              <td> {fruit?.name}  </td>
              <td> {fruit?.price} dh </td>
              <td> en {fruit?.time} </td>
              <td>
              <Link to={`/Fruits/${fruit?.id}/Edit`} className="btn btn-outline-primary mx-1">Edit</Link> 
              <Link to={`/Fruits/${fruit?.id}/delete`} className='btn btn-danger' >Delete</Link>
               </td>
      </tr>

      })

  return (
    <>
   
    
         <div className="col-lg-8 table-responsive mb-5 mx-auto ">
         <h1 >Fruits List :</h1>
                  <table className="table table-bordered text-center my-3 table-striped table-inverse table-responsive">
                      <thead className="bg-secondary text-dark table-inverse ">
                          <tr>
                              <th>Num REF</th>
                              <th>name</th>
                              <th>Price</th>
                              <th>Time</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody className="align-middle">
                         {fruits.length>0? FruitMAP  :
                         <tr> <td  colSpan={5} align='center'> <h4>No Fruits You should to add one :) </h4> </td></tr>
                            }
                      </tbody>
                  </table>
              </div>
  
       
    
    </>
  )
}

export default ListeFruit