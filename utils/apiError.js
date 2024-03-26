class ApiError extends Error{

    constructor(

        statusCode,
        message="Somenthing Went Wrong",
        errors=[],
        stack=""
    
        )
        {
 super(message)
 this.statusCode
 this.message=message
 this.errors=this.errors
 this.data=null
 this.success=false

 if(stack)
 {
    this.stack=stack;

 }

 else{
    Error.captureStackTrace(this,this.constructor)
 }


        }
}


export {ApiError}