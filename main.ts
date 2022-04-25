import { Application } from "./depts.ts"
import { signup } from './handlers/signup.ts'

const port = 3000
const app = new Application()

app.use(signup)

await app.listen({ port });