import * as tap from "tap";
import { parseS3Uri } from "./index.js";

tap.test("invalid prefix", (t) => {
  const { data: found, err } = parseS3Uri(
    "s6://superbucket/orgs/external/2029-files/more"
  );

  if (err === "") t.fail(`must throw here for invalid prefux`);

  const wanted = {
    bucket: "superbucket",
    key: "orgs/external/2029-files/more",
    file: "",
  };

  let wantedErr = `path must start with "s3://prefix"`;
  t.same(found, wanted);
  t.same(err, wantedErr);
  t.end();
});

tap.test("invalid uri", (t) => {
  const { err } = parseS3Uri("s3:///org?.s/anotha-1/2029_files/more");

  t.same(err, "bucket name cannot be empty");
  t.end();
});

tap.test("valid uri", (t) => {
  const { data: found, err } = parseS3Uri(
    "s3://superbucket/org?.s/anotha-1/2029_files/more"
  );

  if (err) t.fail(err);

  const wanted = {
    bucket: "superbucket",
    key: "org?.s/anotha-1/2029_files/more",
    file: "",
  };

  t.same(found, wanted);
  t.end();
});

tap.test("with options.file", (t) => {
  const { data: found, err } = parseS3Uri(
    "s3://superbucket/org?.s/anotha-1/2029_files/more",
    { file: true }
  );

  const wanted = {
    bucket: "superbucket",
    key: "org?.s/anotha-1/2029_files/more",
    file: "",
  };

  t.same(
    err,
    `uri path should end with file, given: s3://superbucket/org?.s/anotha-1/2029_files/more`
  );
  t.same(found, wanted);
  t.end();
});
