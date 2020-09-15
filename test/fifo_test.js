import baretest from "baretest"
import assert from "assert"

import FIFO from "../src/index.js"

const test = baretest("FIFO using array")

test('New queue is empty', () => {
  const f = new FIFO()
  assert.equal(0, f.size())
})

test('add then take returns the added element', () => {
  const f = new FIFO()
  f.add(1234)
  assert.equal(1, f.size())
  assert.equal(1234, f.take())
  assert.equal(0, f.size())
})

test('adding multiple returns them in insert order', () => {
  const f = new FIFO()
  const data = [ "ant", "bee", "cat", "dog", "elk" ]

  data.forEach(animal => f.add(animal))
  assert.equal(data.length, f.size())
  data.forEach(animal => 
    assert.equal(animal, f.take())
  )
  assert.equal(0, f.size())

})


test.run()
