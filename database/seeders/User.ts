import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        name: 'romain@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}
