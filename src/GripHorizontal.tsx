import { Svg, Path, SvgProps } from "@aarock/ui-core"
const GripHorizontal = ( props: SvgProps ) => (
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
            d="M3 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5-3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default GripHorizontal
