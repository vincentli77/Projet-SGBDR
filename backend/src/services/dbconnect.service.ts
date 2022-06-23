import { db } from "../config/db.config";
import mysql, { Pool } from "mysql";

export const connectionDB = async (): Promise<mysql.Pool> => {
	const DB = mysql.createPool(db);
	return DB;
};
