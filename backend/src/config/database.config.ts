const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

const MYSQL = {
	host: MYSQL_HOST,
	port: Number(MYSQL_PORT),
	database: MYSQL_DATABASE,
	user: MYSQL_USER,
	password: MYSQL_PASSWORD,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
	hostname: SERVER_HOSTNAME,
	port: SERVER_PORT,
};

const config = {
	mysql: MYSQL,
	server: SERVER,
};

export default config;
