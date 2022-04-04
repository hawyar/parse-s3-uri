/**
 *  Parse `s3://` style URIs
 *  @param {number} uri - the uri to parse
 *  @param {boolean} options.file - if true, also returns the file name
 *  @return {object} - bucket, key, and file
 *
 *  @example
 *    parse('s3://bucky/anotherdir/test.txt')
 *   // { bucket: 'bucky', key: 'othe2dir', file: '_anothertest.txt' }
 */
export function parseURI (uri, opt = {
  file: false
}) {
  if (typeof uri !== 'string' || uri === '') throw new Error(`invalid or empty uri: ${uri}`)

  if (!uri.startsWith('s3://') || uri.split(':/')[0] !== 's3') throw new Error('uri must start with "s3://"')

  const result = {
    bucket: '',
    key: '/'
  }

  const src = uri.split(':/')[1]

  const [bucket, ...keys] = src.split('/').splice(1)

  if (bucket === '') throw new Error('bucket name cannot be empty')

  result.bucket = bucket
  result.key += keys.join('/')

  if (opt.file && result.key.split('.').length > 1) {
    result.file = result.key.split('/').pop()
  }

  if (opt.file && result.file === '') throw new Error('file name cannot be empty')

  return result
}
