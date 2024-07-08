import React from 'react'
import { BrowserRouter, Route, Routes , Link ,Outlet } from 'react-router-dom'
import ListeFruit from './ListeFruit'
import Addfruit from './Addfruit'
import Editfruit from './editfruit'
import Delete from './Delete'
function LayoutFruit() {
  return (
<>
    <BrowserRouter>
            <nav className="nav justify-content-center">
                <ul className='nav justify-content-center' >
                    <li className="nav-item">
                            <Link to={'/'} className='nav-link' >List Fruits </Link>
                    </li>
                    <li className="nav-item">
                            <Link to={'/addFruit'} className='nav-link' >Add Fruits </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route  path='/addFruit' element={<Addfruit/>}></Route>
                <Route  exact  path='/' element={<ListeFruit/>}></Route>
                <Route path='/Fruits/:id/Edit' element={<Editfruit/>}></Route>
                <Route path='/Fruits/:id/delete' element={<Delete/>}></Route>
                
            </Routes>
    </BrowserRouter>
    <Outlet/>
   </>
  )
}

export default LayoutFruit