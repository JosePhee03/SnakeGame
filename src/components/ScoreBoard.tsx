import { Score } from '../styles/styles'
import { BodyType, FoodType } from '../types/types'

interface Props {
  body: BodyType
  food: FoodType
}

function ScoreBoard ({ body, food }: Props): JSX.Element {
  const score = body.length - 1
  const padScore = score.toString().padStart(3, '000')

  return (
    <Score>
      <div>
        <h6>Score</h6>
        <h5>{padScore}</h5>
      </div>
    </Score>
  )
}

export default ScoreBoard
