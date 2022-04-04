# parse-s3-uri

![Test](https://github.com/hawyar/parse-s3-uri/actions/workflows/test.yml/badge.svg)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Parse S3 URI `s3://`

## Usage

```js
import { parseURI } from "parse-s3-uri"

const { bucket, key } = parseURI("s3://superbucket/more/files")
// { bucket: 'superbucket', key: '/more/files' }
```

return the file name

```js
const { bucket, key } = parseURI("s3://org/media/asset/file.css", { file: true })
// { bucket: 'org', key: '/media/asset/file.css', file: 'file.css' }
```

## Development

### Build

```bash
npm run build
```

### Testing

```bash
npm run test
```
