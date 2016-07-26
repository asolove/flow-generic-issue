// @flow

type Thingy = {
  a: bool,
}

const t1: Thingy = {
  a: true,
}

const t2: Thingy = {
  ...{ a: undefined }
}
