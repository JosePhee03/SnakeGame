import { Svg } from '../styles/styles'
import { DirectionType } from '../types/types'

function ArrowIcon ({ direction }: DirectionType): JSX.Element {
  const DIRECTIONS = {
    ArrowUp: 0,
    ArrowDown: -180,
    ArrowLeft: -90,
    ArrowRight: 90
  }[direction]

  return (
    <Svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.3.org/2000/svg'
      transform={`rotate(${DIRECTIONS})`}
    >
      <path
        d='M25.3333 15.9999L16 6.66658L6.66663 15.9999M16 6.66658L16 25.3333'
        stroke='white'
        strokeWidth='5'
      />
    </Svg>
  )
}

function CrowLogo (): JSX.Element {
  return (
    <img src='/crown-logo.png' alt='' />
  )
}

export { ArrowIcon, CrowLogo }
