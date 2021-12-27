/**
 *  Parse `s3://` style path
 *  @param {number} uri - the uri to parse
 *  @param {number} optios
 *  @param {boolean} optios.file
 *  @return {number} - the bucket, key , file, and errors if any
 */
function parseS3Uri(uri, options) {
  // coould have been a new Error() for better tracing i would rather delegate that
  let err = "";

  if (typeof uri !== "string" || uri === "") err = `Invalid URI: ${uri}`;

  let opt = {
    file: options && options.file ? options.file : false,
  };

  if (!uri.startsWith("s3://") || uri.split(":/")[0] !== "s3") {
    err = `path must start with "s3://prefix"`;
  }

  let result = {
    bucket: "",
    key: "",
    file: "",
  };

  const src = uri.split(":/")[1];
  const [bucket, ...keys] = src.split("/").splice(1);

  if (bucket === "") err = "bucket name cannot be empty";

  result.bucket = bucket;
  result.key = keys.join("/");

  keys.forEach((k, i) => {
    // on last iteration
    if (i === keys.length - 1) {
      const last = k.split(".").length;
      if (opt.file && last === 1)
        err = `uri path should end with file, given: ${uri}`;

      if (!opt.file) {
        last === 1
          ? noop()
          : (err = `Invalid S3 uri, ${uri} should not end with a file name`);
        return;
      }

      if (!opt.file && k.split(".")[1] !== "" && last > 1)
        err = `${uri} should not be a file endpoint: ${k}`;

      if (last > 1 && k.split(".")[1] !== "") result.file = k;
    }
  });
  return {
    data: result,
    err: err,
  };
}

function noop() {}

export { parseS3Uri };
