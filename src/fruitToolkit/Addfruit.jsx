import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addfruits } from './feature/fruitSlice'

function Addfruit() {
   const [disabl , setdisabl]=useState(false)

  const NumREF = useRef()
  const nameREF = useRef('')
  const priceREF= useRef()
  const timeREf = useRef('')
  const dispatch = useDispatch()
   
   const Handelvalue= ()=>{
    if (NumREF.current.value.trim()!==' ' && nameREF.current.value.trim()!=='' &&
    priceREF.current.value.trim()!==' ' && timeREf.current.value.trim()!==''){
          setdisabl(true)
   }else{
    setdisabl(false)
   }

  }




  const HandelPush =()=>{
   
      dispatch(Addfruits({
         id:parseInt(NumREF.current.value),
         name:nameREF.current.value,
         price:parseInt(priceREF.current.value),
         time:timeREf.current.value
      })
      )
      NumREF.current.value= null
      nameREF.current.value=''
      priceREF.current.value= null
      timeREf.current.value=''
      window.history.back()
  }
  return (<>
    <div  id='formUpdate' className=' border-left mx-5' >
     <div className="bg-light rounded p-3 ">
      
       <h1 > Add fruits !</h1>
       <form className='form-floating my-5'  >
         <div className="row g-4">
           <div className="mb-3 row ">
           <div className="col-sm-10">
               <label htmlFor="Fullname" className='col-sm-2-form-label' >   Num referecenses Fruit</label>
               <input type="number"   className="form-control" id="Num" ref={NumREF} onChange={Handelvalue} required placeholder="Num" />

             </div>
             <div className="col-sm-10">
               <label htmlFor="Fullname" className='col-sm-2-form-label' >   name Fruit</label>
               <input type="text"   className="form-control" id="Fullname" ref={nameREF} onChange={Handelvalue} required placeholder=" name Fruit" />

             </div>
           </div>
           <div className="mb-3 row ">
             <div className="col-sm-10">
               <label htmlFor="Age" className='col-sm-2-form-label' >Price</label>
               <input type="number" className="form-control"  name='Price' ref={priceREF} onChange={Handelvalue} required id="Price"  placeholder="price" />

             </div>
           </div>
           <div className="mb-3 row ">
             <div className="col-sm-10">
               <label htmlFor="country"  className='col-sm-2-form-label'>time</label>
               <select name="Country" id="Country" className='form-select' ref={timeREf} onChange={Handelvalue} required  >
                 <option value=""  defaultValue> Select your time</option>
                 <option value="été">été</option>
                 <option value="hiver">hiver</option>
                 <option value="autome">autome</option>
                 <option value="printemps">printemps</option>
               </select>
             </div>
           </div>
           <div className="d-grid gap-2">
             <button className="btn btn-primary" disabled={!disabl} type="button" onClick={HandelPush}  >Add Fruits</button>
           </div>
         </div>
       </form>
     </div>
   </div>
  </>
  

  )
}

export default Addfruit