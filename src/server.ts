import express from "express"
import { myMiddleware } from "./middlewares/my-middleware"

const PORT = 3333

const app = express()

app.use(express.json())

// usando middleware global
app.use(myMiddleware)

app.get("/products", (request, response) => {
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

// middleware local, em uma rota especifica
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body

  response.status(201).json({ name, price })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
