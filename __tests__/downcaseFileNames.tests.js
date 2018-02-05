import { mkdir, mkfile } from 'myFsTrees'; // eslint-disable-line
import downcaseFileNames from '../src/downcaseFileNames';

test('traverse 1', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.JSON'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const actual = downcaseFileNames(tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'config.json', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'eTc',
        type: 'directory',
      },
      { meta: {}, name: 'hosts', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});