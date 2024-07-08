import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FruitSelector } from './Store/fruitSelector'
import { useParams } from 'react-router-dom'
import { ModifyFruit } from './feature/fruitSlice'

function Editfruit() {
  const NumREF = useRef(null)
  const nameREF = useRef(null)
  const priceREF= useRef(null)
  const timeREf = useRef(null)
  const Modifyfruits= useSelector(FruitSelector)
  const dispatch = useDispatch()
  const params = useParams()
   
  const getDataFruits = Modifyfruits.filter((fruit)=>fruit.id===parseInt(params.id))


  const HandelModify =()=>{
       dispatch(ModifyFruit({
        id:parseInt(NumREF.current.value),
        name:nameREF.current.value,
        price:parseInt(priceREF.current.value),
        time:timeREf.current.value,
       }))

       NumREF.current.value= null
      nameREF.current.value=''
      priceREF.current.value= null
      timeREf.current.value=''
      window.history.back()
  }

  return (<>
    {getDataFruits.length>0? 
      getDataFruits.map((frvalue , key)=> {return <div  id='formUpdate' className=' border-left mx-5' >
        <div className="bg-light rounded p-3 "  >
         
          <h1 > Edit fruits !</h1>
          <form className='form-floating my-5' key={key}  >
            <div className="row g-4">
              <div className="mb-3 row ">
              <div className="col-sm-10" >
                  <label htmlFor="Fullname" className='col-sm-2-form-label' >   Num referecenses Fruit</label>
                  <input type="number" readOnly   className="form-control" value={frvalue.id} id="Num" ref={NumREF} placeholder="Num" />
   
                </div>
                <div className="col-sm-10">
                  <label htmlFor="Fullname" className='col-sm-2-form-label' >   name Fruit</label>
                  <input type="text"   className="form-control" id="Fullname" defaultValue={frvalue.name} ref={nameREF} placeholder="Full name" />
   
                </div>
              </div>
              <div className="mb-3 row ">
                <div className="col-sm-10">
                  <label htmlFor="Age" className='col-sm-2-form-label' >Price</label>
                  <input type="number" className="form-control"  name='Price' defaultValue={frvalue.price} ref={priceREF} id="Price"  placeholder="price" />
   
                </div>
              </div>
              <div className="mb-3 row ">
                <div className="col-sm-10">
                  <label htmlFor="country"  className='col-sm-2-form-label'>time</label>
                  <select name="Country" id="Country" defaultValue={frvalue.time} className='form-select'ref={timeREf}   >
                    <option value="été">été</option>
                    <option value="hiver">hiver</option>
                    <option value="autome">autome</option>
                    <option value="printemps">printemps</option>
                  </select>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button"  onClick={HandelModify}  >Edit Fruits</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      })
    : <div className="text-danger alert alert-danger text-center">
       <h1>No fruits selected !!!</h1>
    </div>
    }
     
  </>
  

  )
}

export default Editfruit