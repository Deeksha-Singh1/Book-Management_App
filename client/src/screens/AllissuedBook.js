import React,{useEffect,useState} from 'react';
import {getAllIssuedBook,filterallIssuedBook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'

import TableDate from "../components/TableDate"

const AllIssuedBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllIssuedBook())
      },[dispatch])
   
      const [searchKey,setSearchKey] = useState("")
      
    const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
 
     
   
    const fetchDataAgain = ()=>{
        dispatch(getAllIssuedBook())
    }
  
 

    return (
        <div className="col-md-10 m-auto pt-4" style={{color:"wheat"}}>
            <h4 style={{textAlign:"center"}}> Issued Books</h4>
            <div className="col-md-8 m-auto" style={{display:"flex"}}>
            <input type="text"  className="form-control" placeholder="Search Student by Name"  style
            ={{height:"50px"}}
            onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
            <button  onClick={() => dispatch(filterallIssuedBook(searchKey))} className="btn btn-primary">Search  </button>
            </div>
            <br />
          <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info' style={{color:"white"}}>
    <tr>
        <th>Book</th>
        <th>Author</th>
        <th>Name</th>
        <th>Branch</th>
        <th>Issued Date</th>
        <th>Return Date</th>
        <th>Dues</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    
{all_IssuedBook && all_IssuedBook.map(book=>{
     
     return <TableDate key={book._id} book={book} fetchDataAgain={fetchDataAgain} />

})}

</tbody>

</table>
      
  
        </div>
    );
};

export default AllIssuedBook;
