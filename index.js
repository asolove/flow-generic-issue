// @flow

type Thingy = {
  a: bool,
}

// Plain object with undefined property type.
// This correctly raises a type error.
const t1: Thingy = {
  a: undefined
}

// Spread where inner object has undefined property type.
// This incorrectly fails to raise a type error.
const t2: Thingy = {
  ...{ a: undefined }
}

// Object.assign return value with undefined property type.
// Also incorrectly fails to raise a type error.
const t3: Thingy = Object.assign({}, { a: undefined })
