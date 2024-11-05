import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleChevronLeftFill = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <Path
            fill="currentColor"
            fillRule="evenodd"
            d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM9.28 6.03a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L7.31 8l1.97-1.97Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleChevronLeftFill
