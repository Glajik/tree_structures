# tree_structures
Learn how to work with tree structures


##downcaseFileNames.js

Implement and export the default function, which takes an input directory, names all files in this directory to the lower case and returns it to the outside.

*Example*
```
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
const updatedTree = downcaseFileNames(tree);
```

