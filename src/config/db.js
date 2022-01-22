import faunadb from 'faunadb';
const client = new faunadb.Client({
  secret: "fnAEdR5oE0AAQiVUclK_k5nedEbdqZfYEiFUSfHi",
  domain: "db.us.fauna.com",
  scheme: "http",
  port: 3000
});
const q = faunadb.query;
export { client, q };