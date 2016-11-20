class AClass {
  constructor() {
    this.name = 'a string field';
    this.number = 12341234;
    this.bool = false;
  }
}

function makeAClass () {
  return new AClass()
}

function makeARecord () {
  return {name:'a string field', number: 12341234, bool:false}
}

function makeATuple () {
  return ['a string field', 12341234, false]
}

const loops = 100

test("Class", () => {
  for (let j = 0; j < loops; j++) {
    const list = []
    for(let i = 0; i < 1e6; i++) {
      list.push(makeAClass())
    }
  }
})

test("Records", () => {
  for (let j = 0; j < loops; j++) {
    const list = []
    for(let i = 0; i < 1e6; i++) {
      list.push(makeARecord())
    }
  }
})

test("Tuples", () => {
  for (let j = 0; j < loops; j++) {
    const list = []
    for(let i = 0; i < 1e6; i++) {
      list.push(makeATuple())
    }
  }
})
