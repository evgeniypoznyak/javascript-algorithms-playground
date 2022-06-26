class Hash {
  constructor() {
    this.values = {}
  }

  has(v) {
    return this.values[v] !== undefined
  }

  set(value, index1, index2) {
    this.values[value] = [index1, index2]
  }

  get(v) {
    return this.values[v]
  }
}

function calculateSpace(target, nums) {
  const hash = new Hash()
  for (let i = 0; i < nums.length; i++) {
    if (hash.values['30'] !== undefined) {
      return hash.values['30'].length
    }
    for (let j = i + 1; j < nums.length; j++) {
      const difference = target - (nums[i] + nums[j])
      hash.set(difference, i, j)
    }
  }
}

console.log(calculateSpace(110, [20, 70, 90, 30, 60, 110]))
console.log(calculateSpace(250, [110, 180, 40, 120, 10]))
