import { Context } from "../depts.ts";

export const getData = async (context : Context) => {
  try {
    const result = context.request.body()
    if(result.type !== 'json') {
      throw {status: 415, error: "invalid format"}
    } else {
      return await result.value
    }
  } catch(e) {
    throw e
  }
}