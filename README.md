## Installation

requires [Node.js](https://nodejs.org/) >= 14.15.4 and [Npm](https://www.npmjs.com/) >= 6.0.0 to run .

Install the AdonisJs with typescript by Following Commands and run the server in local.

```sh
npm init adonis-ts-app@latest project-name
cd project-name
node ace serve --watch
```

Install Lucid ORM for Database migrations and seed and configuation

```sh
npm i @adonisjs/lucid
node ace configure @adonisjs/lucid
```

Open the env.ts file and paste the following code inside the Env.rules object.
DB_CONNECTION: Env.schema.string(),

## Variables for the MYSQL driver

    MYSQL_HOST: Env.schema.string({ format: 'host' }),
    MYSQL_PORT: Env.schema.number(),
    MYSQL_USER: Env.schema.string(),
    MYSQL_PASSWORD: Env.schema.string.optional(),
    MYSQL_DB_NAME: Env.schema.string(),

    * The MYSQL_HOST should always be present and formatted as a valid host.
    * The MYSQL_PORT should always be present and a valid number.
    * The MYSQL_USER and MYSQL_PASSWORD are required to authenticate with the database server. The password is marked as optional since many local database servers are configured to work without passwords.
    * The MYSQL_DB_NAME is the database name you want to connect with.

## Variables for the PostgreSQL driver

    PG_HOST: Env.schema.string({ format: 'host' }),
    PG_PORT: Env.schema.number(),
    PG_USER: Env.schema.string(),
    PG_PASSWORD: Env.schema.string.optional(),
    PG_DB_NAME: Env.schema.string(),

## Variables for the MSSQL driver

    MSSQL_SERVER: Env.schema.string({ format: 'host' }),
    MSSQL_PORT: Env.schema.number(),
    MSSQL_USER: Env.schema.string(),
    MSSQL_PASSWORD: Env.schema.string.optional(),
    MSSQL_DB_NAME: Env.schema.string(),

## Variables for the OracleDB driver

    ORACLE_HOST: Env.schema.string({ format: 'host' }),
    ORACLE_PORT: Env.schema.number(),
    ORACLE_USER: Env.schema.string(),
    ORACLE_PASSWORD: Env.schema.string.optional(),
    ORACLE_DB_NAME: Env.schema.string(),

## create Model with Migration

```sh
node ace make:model User -m
```

## run migation

```sh
node ace migation:run
```

### controller create command

```sh
node ace make:controller User
```

### Create Validator class

```sh
node ace make:validator CreateUser
```

### Create Database Seeders

```sh
node ace make:seeder User
```

### run partucular seeders

```sh
node ace db:seed --files "./database/seeders/User.ts"
```

### Run all Seeders

```sh
node ace db:seed
```

### Run Interactive seeders only by selection

```sh
node ace db:seed -i
```

### Authentaion configuration

```sh
npm i @adonisjs/auth
node ace configure @adonisjs/auth
```

### eslint auto fix

```sh
npm run lint
```

### prettier format all files

```sh
npm run format
```

### For production environments...

```sh
node ace build --production
cd build
npm ci --production
node server.js
```
