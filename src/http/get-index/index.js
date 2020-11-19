// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: 'look ma no buckets!'
  }
}
