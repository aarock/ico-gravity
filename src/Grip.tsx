import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Grip = ( props: SvgProps ) => (
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
            d="M7 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM5.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Grip
