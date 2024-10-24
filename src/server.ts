import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes/index"
import { AppError } from "./utils/AppError"

const PORT = 3333

const app = express()

app.use(express.json())
app.use(routes)

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  // esta verificando se error foi causado por algo que esta utilizando, passando em AppError
  // se foi um error que foi gerado utilizado a classe AppError
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }
  response.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
