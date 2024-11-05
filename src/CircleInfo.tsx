import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleInfo = ( props: SvgProps ) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0V8.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleInfo
