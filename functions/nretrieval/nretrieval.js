// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunadb = require("faunadb")

const q = faunadb.query
const faunaClient = new faunadb.Client({ secret: process.env.DB_KEY, 
domain: "db.us.fauna.com" 
})

exports.handler = async (event, context) => {
  let resp

  if (event.httpMethod === 'GET') {
    resp = await getNouns()
  } else {
    resp = {statusCode: 500, body: 'you goofed'}
  }

  return {statusCode: resp.statusCode, body: resp.body}

  async function getNouns() {
    try {
      const req = await faunaClient.query(q.Map(q.Paginate(q.Match(q.Index("articles_by_french"))), q.Lambda("attr", q.Get(q.Var("attr")))))
      console.log(req)
      return {statusCode: 200, body: JSON.stringify(req.data)}
    } catch (err) {
      return { statusCode: 500, body: JSON.stringify({ error: err.message})}
    }
  }

}
