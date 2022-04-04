import * as tap from 'tap'
import { parseURI } from './index.js'

tap.test('invalid prefix', (t) => {
  t.throws(() => parseURI('s6://superbucket/org?.s/anotha-1/2029_files/more'))
  t.end()
})

tap.test('valid uri, no opt', (t) => {
  t.same(parseURI(
    's3://superbucket/orgs/anotha/temp.txt'
  ), {
    bucket: 'superbucket',
    key: '/orgs/anotha/temp.txt'
  })
  t.end()
})

tap.test('valid uri, file opt', (t) => {
  t.same(parseURI(
    's3://superbucket/orgs/anotha/temp.txt', { file: true }
  ), {
    bucket: 'superbucket',
    key: '/orgs/anotha/temp.txt',
    file: 'temp.txt'
  })
  t.end()
})
