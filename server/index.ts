import createApp from 'express'
import { HomeController } from './Controllers/HomeController'
import { Router } from './Router/Router'
import { UserController } from './Controllers/UserController'
import { UserRepo } from './Respositories/UserRepo'
import bodyParser from 'body-parser'

const app = createApp()
const router = new Router(app)
app.use(bodyParser.json())

const home = new HomeController()
router.get('/', home.hello.bind(home))

const userRepo = new UserRepo()
const user = new UserController(userRepo)
router.post('/api/users/create', user.create.bind(user))

app.listen(3000, () => {
  console.log('Server is running on: http://localhost:3000/')
})
