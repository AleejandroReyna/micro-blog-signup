// deno-lint-ignore no-explicit-any
export const validateData = (request : any) => {
  if((request.email && request.password && request.password_confirmation)) {
    if(request.password === request.password_confirmation) {
      return true;
    } 
  }
  throw {status: 400, error: "Invalid data"}
}