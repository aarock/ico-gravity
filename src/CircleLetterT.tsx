import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleLetterT = ( props: SvgProps ) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6 5a.75.75 0 0 0 0 1.5h1.25v4.25a.75.75 0 0 0 1.5 0V6.5H10A.75.75 0 0 0 10 5H6Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleLetterT
