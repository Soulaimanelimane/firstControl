
import { useParams } from 'react-router-dom'

import { DeleteFruit } from './feature/fruitSlice'
import { useDispatch } from 'react-redux';

function Delete() {
     const params = useParams() ; 
     const id = parseInt(params.id) ; 
     const dispatch = useDispatch() ;
     dispatch(DeleteFruit({id:id})) ;
     window.history.back() ; 
}

export default Delete