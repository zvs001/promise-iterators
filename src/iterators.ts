export async function eachSeries<ItemType>(data: ItemType[], fn: (item: ItemType, index: number) => Promise<any>) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    await fn(item, i)
  }
}

export async function eachSeriesSafe<ItemType>(data: ItemType[], fn: (item: ItemType, index: number) => Promise<any>) {
  return eachSeries(data, async (item, index) => {
    try {
      await fn(item, index)
    } catch (e) {
      console.error(`eachSeriesSafe [${index}]:`, e)
    }
  })
}

export async function mapSeries<ItemReturnType, ItemType>(data: ItemType[], fn: (item: ItemType, index: number) => Promise<ItemReturnType>): Promise<ItemReturnType[]> {
  const resultArr: ItemReturnType[] = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const result = await fn(item, i)
    resultArr[i] = result
  }

  return resultArr
}

export async function mapSeriesSafe<ItemType>(data: ItemType[], fn: (item: ItemType, index: number) => Promise<any>) {
  return mapSeries(data, async (item, index) => {
    try {
      await fn(item, index)
    } catch (e) {
      console.error(`mapSeriesSafe [${index}]`, e)
    }
  })
}

export default {
  eachSeries,
  eachSeriesSafe,
  mapSeries,
  mapSeriesSafe,
}
