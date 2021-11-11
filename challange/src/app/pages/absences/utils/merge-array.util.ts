export  class _Array {
  public static mergeBy(collection1: Array<any>, collection2: Array<any>, key: string) {
    return collection1.map(itm => ({
      ...collection2.find((item) => (item[key] === itm[key]) && item),
      ...itm
    }))
  }
}
