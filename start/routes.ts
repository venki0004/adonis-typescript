/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/api/users', 'UsersController')

Route.post('upload', async ({ request }) => {
  console.log(request.files('file'))
  const coverImage = request.file('file')
  if (coverImage) {
    await coverImage.move(Application.tmpPath('uploads'))
  }
})

Route.post('rename-upload', async ({ request }) => {
  const postSchema = schema.create({
    file: schema.file({
      size: '2mb',
      extnames: ['jpg', 'gif', 'png', 'pdf'],
    }),
  })
  const payload = await request.validate({ schema: postSchema })

  const fileName = `${cuid()}.${payload.file.extname}`
  await payload.file.move(Application.tmpPath('uploads'), {
    name: fileName,
  })
})

Route.get('uploads/:filename', async ({ params, response }) => {
  return response.attachment(Application.tmpPath('uploads', params.filename), 're-named.pdf')
})

Route.post('login', async ({ auth, request, response }) => {
  const name = request.input('name')
  const password = request.input('password')
  // Lookup user manually
  const user = await User.query().where('name', name).firstOrFail()
  // Verify password
  if (!(await Hash.verify(user.password, password))) {
    return response.badRequest('Invalid credentials')
  }
  // Generate token
  const token = await auth.use('api').generate(user, { expiresIn: '10'}
  )
  return token
})
