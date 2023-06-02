import React,{useEffect,useState} from 'react';
import {getUserIssuedBook ,singleissueABook ,issueABookReturn,returnReqAction} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Modal,Button} from "react-bootstrap"
import Moment from 'react-moment';
import moment from 'moment';

const UserIssuedBook = () => {
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getUserIssuedBook())
      },[dispatch])
      const [show, setShow] = useState(false);
      const [date,setDate] = useState(null)
      const handleClose = () => setShow(false);
      
      
    const {userIssuedBook} = useSelector(state => state.userIssuedBookReducer)
    const {singleIsBook} = useSelector(state => state.singleIssuedBookReducer)
     
    const issuedBook = userIssuedBook && userIssuedBook.filter(item => item.isIssue);
   
    const callAnotherFunction = (postId)=>{
        dispatch(singleissueABook(postId))
    }
    
     const handleModal = (postId,cDate) => {
         setDate(cDate) 
         setShow(true);
         callAnotherFunction(postId)
     }
    var dateFrom ;
    var dayDiff ;
  if(date){
    var result = new Date(date) ;
    result.setDate(result.getDate() + 7);
    dateFrom= result ;

    var today = moment(new Date());
    var end = moment(result); // another date
var duration = moment.duration(today.diff(end));
var days = duration.asDays();
dayDiff = days
      
  }


  const handleReqAndReturn = (book)=>{
      dispatch(issueABookReturn(book.bookId))

       dispatch(returnReqAction(book))
  }
  
 
 
    return (
        <div className="col-md-10 m-auto pt-4">
          {!issuedBook.length  ? <>
          <div className="bg-success p-2 text-center">
          <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>You haven't any Issued Books</h4>
          </div>
          
          </> : 
          <>
            <h4 style={{textAlign:"center",fontFamily:"sans-serif", color:"wheat"}}>My Issued Book</h4>
            <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info' style={{color:"whiteSmoke"}}>
    <tr>
        <th style={{textAlign:"center"}}>Book</th>
        <th style={{textAlign:"center"}}>Author</th>
        <th style={{textAlign:"center"}}>Publisher</th>
        <th style={{textAlign:"center"}}>Actions</th>
    </tr>
</thead>
<tbody>
    
{issuedBook && issuedBook.map(book=>{

    return <tr key={book._id}>
        <td style={{textAlign:"center"}}>{book.title}</td>
        <td style={{textAlign:"center"}}>
            {book.author}
        </td >
        <td style={{textAlign:"center"}}>
            {book.publisher}
        </td>
       
        <td style={{textAlign:"center"}}>
          
             <button onClick={() => handleReqAndReturn(book)} className="btn btn-danger mr" style={{marginRight:"5px"}}>Return </button>
             <button onClick={() => handleModal(book.bookId,book.createdAt)} className="btn btn-success">Details</button>
        </td>

    </tr>

})}
</tbody>

</table>
      <div>
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
            <h3><b>Book Name : </b>{singleIsBook && singleIsBook.title}</h3>
            <p>  <b>Author :</b> {singleIsBook && singleIsBook.author}</p>
            <p> <b>Publisher : </b>{singleIsBook && singleIsBook.publisher}</p>
            <p> <b>Originally published: </b>{singleIsBook && singleIsBook.year}</p>
            <p> <b>Issued Date:</b>{date &&  <Moment format="YYYY-MM-DD">{date}</Moment>}</p>
          
            <p> <b>Return Date :</b> {date &&  <Moment format="YYYY-MM-DD">{dateFrom}</Moment>}</p>
          
          
            <p>  {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) : null }  </p>
            <h3> Fine : {Math.floor(dayDiff) > 0 ?Math.floor(dayDiff) * 15 : 0 } </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
      </div>
       </> }
        </div>
    );
};

export default UserIssuedBook;