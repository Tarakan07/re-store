import React from "react";
import BookstoreServiceConsumer from "../bookstore-services-context";

const WithBookstoreService=()=>(Wrapped)=>(props)=>{
  return(
    <BookstoreServiceConsumer>
      {
        (bookstoreService)=>{
          return(
            <Wrapped props={...props} bookstoreService={bookstoreService}/>
          )
          
        }
      }
    </BookstoreServiceConsumer>
  )
}

export default WithBookstoreService;