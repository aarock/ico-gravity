import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareDot = ( props: SvgProps ) => (
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
            d="M8.25 1.5a.75.75 0 0 1 0 1.5H4.5A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V7.75a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3.75Zm4.25 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareDot
