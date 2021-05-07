// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  async store({ request, response }) {
    const { name, password } = await request.validate(CreateUserValidator)

    const user = await User.create({
      name,
      password,
    })

    return response.send(user)
  }

  async index({ response }) {
    const user = await User.all()
    return response.send(user)
  }
}
