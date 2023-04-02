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

function CrownLogo (): JSX.Element {
  return (
    <img src='/crown-logo.png' alt='' />
  )
}

function PlayIcon (): JSX.Element {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <path
        fill='#fff'
        d='M11.26 24.75c-.495.314-.995.332-1.501.053-.506-.277-.759-.707-.759-1.288V8.485c0-.58.253-1.01.759-1.29.506-.277 1.006-.259 1.5.056l12.074 7.515c.445.29.667.702.667 1.234 0 .533-.222.944-.667 1.235L11.26 24.75zm.703-3.885L19.741 16l-7.778-4.865v9.73z'
      />
    </Svg>
  )
}

function PauseIcon (): JSX.Element {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <path
        fill='#fff'
        d='M20 25.333c-.733 0-1.36-.26-1.883-.782a2.569 2.569 0 01-.784-1.884V9.333c0-.733.262-1.36.784-1.882A2.565 2.565 0 0120 6.667h2.667c.733 0 1.361.261 1.884.784.521.522.782 1.15.782 1.882v13.334a2.57 2.57 0 01-.782 1.884 2.57 2.57 0 01-1.884.782H20zm-10.667 0c-.733 0-1.36-.26-1.882-.782a2.569 2.569 0 01-.784-1.884V9.333c0-.733.261-1.36.784-1.882a2.565 2.565 0 011.882-.784H12c.733 0 1.361.261 1.884.784.522.522.783 1.15.783 1.882v13.334c0 .733-.261 1.361-.783 1.884a2.571 2.571 0 01-1.884.782H9.333zM20 22.667h2.667V9.333H20v13.334zm-10.667 0H12V9.333H9.333v13.334z'
      />
    </Svg>
  )
}

export { ArrowIcon, CrownLogo, PlayIcon, PauseIcon }
