interface directionType {
  direction: 'up' | 'left' | 'right' | 'down'
}

function ArrowIcon ({ direction }: directionType): JSX.Element {
  const DIRECTIONS = {
    up: 0,
    down: -180,
    left: -90,
    right: 90
  }

  console.log({ DIRECTIONS })

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
