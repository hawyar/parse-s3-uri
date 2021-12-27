# pase-s3-uri

> Parse S3 URI `s3://`

![tests](https://github.com/hawyar/parse-s3-uri/actions/workflows/test.yml/badge.svg)

## Usage

```js
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
