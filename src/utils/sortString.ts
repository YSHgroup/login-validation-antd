import { CoutryInterface, CountryName } from '../types/interfaces'

const compareStr = (pre: CoutryInterface<CountryName>, next: CoutryInterface<CountryName>) => {
  return (
    pre.name.common.toLocaleLowerCase().localeCompare(next.name.common.toLocaleLowerCase())
  )
}
type SortStr = (stringArr: [] | CoutryInterface<CountryName>[]) => CoutryInterface<CountryName>[]
export const sortStr: SortStr = (stringArr) => {
  if (stringArr) {
    stringArr.sort(compareStr)
    return stringArr
  }
  return []
}