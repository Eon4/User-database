import { sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new sequelize(
	process.env.DBNAME,
	process.env.DBUSER,
	process.env.DBPASSWD,
	{
		host: process.env.DBHOST,
		dialect: 'mysql'
	}
)

export { sequelize }