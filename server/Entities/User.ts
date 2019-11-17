export class User {
  id: string = ''
  name: string = ''

  constructor (data: Partial<User> = {}) {
    Object.assign(this, data)
  }
}
