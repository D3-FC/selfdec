import { UserRepo } from '../Respositories/UserRepo'
import { Request } from 'express'

export class UserController {
  private userRepo: UserRepo

  constructor (userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  async create (req: Request) {
    const user = await this.userRepo.create(req.body)
    return user
  }
}
