import { directionType } from '../types/types'

function ArrowIcon ({ direction }: directionType): JSX.Element {
  const DIRECTIONS = {
    ArrowUp: 0,
    ArrowDown: -180,
    ArrowLeft: -90,
    ArrowRight: 90
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      transform={`rotate(${DIRECTIONS[direction]})`}
    >
      <path d='M12 19L12 5' />
      <path d='M5 12L12 5 19 12' />
    </svg>
  )
}

export { ArrowIcon }
