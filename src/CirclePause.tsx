import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CirclePause = ( props: SvgProps ) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1.75-9.75a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1Zm-2.5 1a1 1 0 0 0-2 0v3.5a1 1 0 1 0 2 0v-3.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CirclePause
