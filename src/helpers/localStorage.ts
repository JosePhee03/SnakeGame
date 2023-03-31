import { SnakeType } from '../types/types'

type ItemType = 'SNAKE'

export function SetLocalStorage (item: ItemType, snake: SnakeType): void {
  window.localStorage.removeItem(item)
  window.localStorage.setItem(item, JSON.stringify(snake))
}

export function GetLocalStorage (item: ItemType): SnakeType {
  const getItem = window.localStorage.getItem(item)
  return JSON.parse(getItem as string)
}

export function ClearLocalStorage (item: ItemType): void {
  window.localStorage.removeItem(item)
}
