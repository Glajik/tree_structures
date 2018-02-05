const downcaseFileNames = (tree) => {
  const { children, meta, name, type } = tree;
  if (type === 'file') return tree.name = name.toLowerCase();
  if (children) children.map(downcaseFileNames);
  return tree;
};

export default downcaseFileNames;