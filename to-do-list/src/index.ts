import express, {Express, Request, Response} from 'express'
import cors from "cors"
import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config() 

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306,
        multipleStatements: true
    }
})

const app = express ()
app.use(express.json())
app.use(cors());

app.post('/',  )
app.listen(3003, ()=> {
    console.log('Servidor rodando na porta 3003.')
})
