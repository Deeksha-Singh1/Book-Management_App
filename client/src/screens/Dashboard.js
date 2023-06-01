import React from 'react';
import  Sidebar from "../components/Sidebar"
import {Switch,Route} from "react-router-dom";
import AddBook from "./AddBook"
import AllBook from "./AllBook"
import AllStudent from "./AllStudent"
import UserHome from "../components/UserHome"
import UserIssuedBook from "./UserIssuedBook"
import AllIssuedBook from "./AllissuedBook"
import Navbar from "../components/Navbar"
import IssueReturn from "./Issue_Return";



const Dashboard = () => {
    return (
         <div>
             <div style={{marginBottom:"64px"}}>
               <Navbar  />
             </div>
        
            <div style={{display:"flex"}}>
                  <div style={{height:"940px",marginLeft:"10px",width:"14%",backgroundColor:"#635c5b"}}>
                       <Sidebar  />         
                  </div>
                  <div style={{height:"940px",marginLeft:"10px",width:"80%"}}>
                  <Switch>
                  <Route path="/dashboard/" component={UserHome} exact />
            <Route path="/dashboard/addBook" component={AddBook} exact />
                <Route path="/dashboard/allBook" component={AllBook} exact />
                <Route path="/dashboard/manageStudent" component={AllStudent} exact />
                <Route path="/dashboard/issuedBook" component={UserIssuedBook} exact /> 
                <Route path="/dashboard/allissuedBook" component={AllIssuedBook} exact /> 
                            
                <Route path="/dashboard/issue_return" exact component={IssueReturn} />
            
            </Switch>  
                  </div>
            </div>
        </div>
    );
};

export default Dashboard;