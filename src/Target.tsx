import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Target = ( props: SvgProps ) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-4.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Target
