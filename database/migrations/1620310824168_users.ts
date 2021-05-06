import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('password', 1000)
      table.timestamps(false)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
