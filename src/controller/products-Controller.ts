import { Request, Response } from "express"

import { AppError } from "../utils/app-error"

import { z } from "zod"

class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(6, { message: "Name must be 6 or more characters" }),

      price: z
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive" }),
    })

    const { name, price } = bodySchema.parse(request.body)

    // if (!name || !price) {
    //   throw new AppError("Nome do produto é obrigatório")
    // }

    // if (name.trim().length < 6) {
    //   throw new AppError("Nome do produto deve ter no mínimo 6 caracteres")
    // }

    // if (!price) {
    //   throw new AppError("Preço do produto é obrigatório")
    // }

    // if (price < 0) {
    //   throw new AppError("Preço do produto não pode ser negativo")
    // }

    //throw new AppError("Erro ao tentar criar um produto")

    response.status(201).json({ name, price, user_id: request.user_id })
  }
}

export { ProductsController }

/**
 * index - GET para listar varios registros
 * show - GET para listar um unico registro
 * create - POST para criar um novo registro
 * update - PUT para atualizar um registro
 * remove - DELETE para deletar um registro
 */
