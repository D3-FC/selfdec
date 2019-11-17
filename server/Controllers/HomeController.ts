import { Request, Response } from 'express'

export class HomeController {

  message = 'Hello'

  hello (req: Request, res: Response) {
    return this.message
  }
}
