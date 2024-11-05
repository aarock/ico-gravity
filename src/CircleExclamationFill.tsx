import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleExclamationFill = ( props: SvgProps ) => (
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
            d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0V5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleExclamationFill
