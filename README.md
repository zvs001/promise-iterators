
Package provides utils for promises

[![npm](https://img.shields.io/npm/v/promise-iterators)](https://www.npmjs.com/package/promise-iterators)

## Install

``yarn add promise-iterators``

or 

```npm i -S promise-iterators```

## Methods

- mapSeries
- mapSeriesSafe (avoid crashing on exception)
- eachSeries
- eachSeriesSafe

## Example

```tsx
import { mapSeries } from 'promise-iterators'

const idList = [1,2,3,4,5]

const data = await mapSeries(idList, async (id, index) => {
    const result = await api.getObject(id)
    return result
})

console.log(data) // [obj1, obj2, obj3, ...]
```