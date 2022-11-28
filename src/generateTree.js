export default function generateTree() {
  let tree = {
    0: {
      id: 0,
      filePaths: [
        'http:xxxxxxxx.png'
      ],
      folderName: 'Files',
      childIds: [
        'new_0',
        'new_1'
      ],
      parentIds: []
    },
    selected: {
      id: 0,
      filePaths: [
        'http:xxxxxxxx.png'
      ],
      folderName: 'Files',
      childIds: [
        'new_0',
        'new_1'
      ],
      parentIds: []
    },
    new_0: {
      id: 'new_0',
      folderName: 'Documents',
      parentIds: [
        0
      ],
      filePaths: [],
      childIds: []
    },
    new_1: {
      id: 'new_1',
      folderName: 'Music',
      parentIds: [
        0
      ],
      filePaths: [
        'xxxx.mp3'
      ],
      childIds: []
    }
  }

  return tree
}
