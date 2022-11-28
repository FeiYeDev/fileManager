export default function generateTree() {
  let tree = {
    selected: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'Files',
      childIds: [],
      parentIds: []
    },
    0: {
      id: 0,
      filePaths: ['http:xxxxxxxx.png'],
      folderName: 'Files',
      childIds: [1,2],
      parentIds: []
    },
    1: {
      id: 1,
      filePaths: ['http:ssssssss.png'],
      folderName: 'Documents',
      childIds: [],
      parentIds: [0]
    },
    2: {
      id: 2,
      filePaths: ['http:fffffffff.png'],
      folderName: 'Music',
      childIds: [3],
      parentIds: [0]
    },
    3: {
      id: 3,
      filePaths: [],
      folderName: 'R&B',
      childIds: [],
      parentIds: [2]
    }
  }

  return tree
}
