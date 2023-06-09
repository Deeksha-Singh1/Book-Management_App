import React,{useState,useEffect} from 'react';
import {getAllBook,filterBook, removeABook} from "../actions/book_action"
import {issueABook,getAllIssuedBook} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import {Toast} from "react-bootstrap"

const AllBook = () => {
    const dispatch = useDispatch() ;
    const [searchKey,setSearchKey] = useState("")
    const [show, setShow] = useState(false);
    const[bootTitle,setBookTitle] = useState(null)
   const[error,setError] = useState(false)
    
    useEffect(()=> {
        dispatch(getAllBook())
        dispatch(getAllIssuedBook())
    },[dispatch,show])
    
   const {books} = useSelector(state => state.getAllBookReducer)
   
   const {all_IssuedBook} = useSelector(state => state.allIssuedBookReducer)
   const {currentUser} = useSelector(state => state.userLoginReducer)
   const userId = currentUser.user._id ;
  const  userBranch  =  currentUser.user.branch ;
  const userName = currentUser.user.name;
  
let filterBook22 = all_IssuedBook && all_IssuedBook.filter(book=> book.userId === userId);
let newBooksId = filterBook22 && filterBook22.map(book=> book.bookId)

    

    const postData = (book)=>{

       
        if(newBooksId && newBooksId.includes(book._id)){
            console.log("You can not add one more book")
            setError(true);
            setTimeout(()=>{
              setError(false)
            },3000)
            return ;
        }

        if(book.copies < 1){
            console.log("No copies available")
            return;
           

        }
        const {title,author,publisher,year,_id,copies} = book ;
     
        const issueUser = {
            title,author,publisher,year,userId,bookId:_id,userBranch,userName,copies
        }
        if(book.copies){
            dispatch(issueABook(issueUser))
            setBookTitle(title)
            setShow(true) ;
            dispatch(getAllBook())
        } else {
            alert("book not available")
        }
        setTimeout(()=>{
            setShow(false)
        }, 5000)   
    }

   const handleRemoveBook = (bookId) => {
    const confirmed = window.confirm('Do you want to remove this book?');
    if (confirmed) {
      dispatch(removeABook(bookId));
      dispatch(getAllBook());
    }
  };

    return (
        <div>
               <div className="col-md-10 m-auto" >
                  <h3 className='text-center bg-info p-2' style={{fontFamily:"sans-serif",color:"wheat"}}>All AVAILABLE BOOkS IN LIBRARY</h3>
                  <br />
                  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                 <Toast.Body style={{backgroundColor:"green",color:"white",fontSize:"18px"}}>You successfully send issue request for {bootTitle}  </Toast.Body>
                  </Toast>
              

              
            </div>

            {error && <div className="alert alert-danger"> You have already requested for this book </div>}
         
           { books.length ===0 ?
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
           <h4>No books available</h4>
         </div>
           
           : (
               <>
                  <div className="col-md-8 m-auto" style={{display:"flex"}}>
                  <input type="text"  className="form-control" placeholder="Search book by Title"  style
                  ={{height:"50px"}}
                  onChange={(e) => setSearchKey(e.target.value)} value={searchKey} />
                  <button  onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">Search </button>
                  </div>
                  
                  <div className="col-md-10 m-auto">
      
                  <table  className='table table-bordered table-responsive-sm' style={{marginTop:"20px"}}>
      
                    
      
      <thead className='thead-dark' style={{color:"wheat"}}>
          <tr>
              <th>Serial No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Copies</th>
              <th>Status</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
      {books && books.map((book,index)=>{
      
          return <tr key={book._id}>
                  <td>{index+1}</td>
              <td>{book.title}</td>
              <td>
                  {book.author}
              </td>
              <td>{book.copies}</td>
              <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
              <td style={{color:"red"}}>
                 
                  {currentUser.user.isAdmin && (
                      <button className="btn btn-danger" onClick={() => handleRemoveBook(book._id)}>
                      Remove
                    </button>
                  )}
                  {!currentUser.user.isAdmin && (
                      <button  onClick={() => postData(book)} className={`btn btn-success`}>Issue</button>
                  )}
                 
              </td>
      
          </tr>
      
      })}
      </tbody>
      
      </table>
      </div>
      </>
           )}
        </div>
    );
};

export default AllBook;