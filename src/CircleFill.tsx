import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleFill = ( props: SvgProps ) => (
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
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleFill
