import { BodyType } from '../types/types'

function AddBody (body: BodyType): BodyType {
  const newBody = [...body]
  newBody.push({ snakeX: -30, snakeY: -30 })
  return newBody
}

export default AddBody
