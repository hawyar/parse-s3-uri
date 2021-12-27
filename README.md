# pase-s3-uri

![tests](https://github.com/hawyar/parse-s3-uri/actions/workflows/test.yml/badge.svg)

> Parse S3 URI `s3://`

## Usage

```js
import { parseS3Uri } from "parse-s3-uri";
const { data, err } = parseS3Uri(
	"s6://superbucket/orgs/external/2029-files/more",
	{ file: false }
);
```

## Testing

```bash
npm run test
```

## Build

```bash
npm run build
```
