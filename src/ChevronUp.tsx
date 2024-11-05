import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ChevronUp = ( props: SvgProps ) => (
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
            d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronUp
