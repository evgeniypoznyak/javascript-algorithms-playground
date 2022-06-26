class HashTable {
  constructor(size) {
    this.data = new Array(size)
    // this.data = [];
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      const currentHash = hash
      const charCodeAtI = key.charCodeAt(i)
      const len = this.data.length
      const complex = currentHash + charCodeAtI * i
      const result = complex % len
      hash = result
      // hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash
  }

  set(key, value) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    const address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
