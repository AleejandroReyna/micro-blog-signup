import { Context } from "../depts.ts";
import { getData } from '../utilities/getData.ts'
import { validateData } from '../utilities/validateData.ts'

export async function signup(context : Context) {
    try {
      const request = await getData(context)
      validateData(request)
      context.response.body = request
      return context
    } catch(e) {
      context.response.status = e.status
      context.response.body = e.error
      return context
    }
  }