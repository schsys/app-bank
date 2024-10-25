"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  const sql = neon(`${process.env.DB_URL}`);
  console.log(process.env);

  const data = await sql`...`;
  return data;
}
