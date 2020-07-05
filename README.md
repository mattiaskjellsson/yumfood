## Description
Simple restaurant backend using NestJS on top of a PostgreSql database.

## Installation
Install docker (https://docker.com/)

```bash
$ npm install
```
Create .env file containing the following enteries

```
DB_HOST
DB_USER
DB_PASS
DB_DATABASE
DB_PORT
DB_SSL
DB_SYNCHRONIZE
DB_DROP_SCHEMA
DB_MIGRATIONS_RUN
```

Example 

```
DB_HOST=localhost
DB_USER=dbUser
DB_PASS=secret
DB_DATABASE=yum
DB_PORT=5431
DB_SSL=false
DB_SYNCHRONIZE=true
DB_DROP_SCHEMA=true
DB_MIGRATIONS_RUN=true
```

## Running the app

Start docker
```bash
$ docker-compose up -d
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# e2e tests
Import Postman (https://postman.com) test collection and run

## Support

## Stay in touch

- Author - [Mattias Kjellsson](https://github.com/mattiaskjellsson)

## License

UNLICENSED
