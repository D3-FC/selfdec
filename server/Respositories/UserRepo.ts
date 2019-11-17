import { User } from '../Entities/User'
import { Repo } from './Repo'

export class UserRepo extends Repo {

  async create (user: Partial<User>): Promise<User> {
    const r = await this.insert('INSERT INTO users (name) VALUES (?)', [user.name])
    const found = await this.query(`SELECT * FROM users WHERE users.id = ${r.results.insertId}`)
    return new User(found.results[0])
  }
}
