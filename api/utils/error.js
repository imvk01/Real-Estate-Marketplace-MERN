export const errorHandler=(codeStatus,message)=>{
    const error = new Error();
    error.codeStatus = codeStatus;
    error.message = message;
    return error;
}