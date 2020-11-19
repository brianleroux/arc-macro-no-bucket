module.exports = async function nobucket(arc, cfn) {
  delete cfn.Resources.StaticBucket
  delete cfn.Outputs.BucketURL
  delete cfn.Resources.HTTP.Properties.DefinitionBody.paths['/_static/{proxy+}']
  return cfn
}
