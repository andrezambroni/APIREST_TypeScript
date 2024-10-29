import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes/index"
import { AppError } from "./utils/app-error"
import { ZodError } from "zod"

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

  if (error instanceof ZodError) {
    response
      .status(400)
      .json({ message: "Validation error!", issues: error.format() })
  }

  response.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
