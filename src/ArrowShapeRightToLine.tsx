import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowShapeRightToLine = ( props: SvgProps ) => (
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
            d="M6 9.5v2.471l4.276-3.499a.61.61 0 0 0 0-.944L6 4.029V6.5H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25H6Zm7.5-1.498v6.248a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0v6.252Zm-1.5 0a2.11 2.11 0 0 1-.774 1.631l-4.319 3.534a1.474 1.474 0 0 1-2.407-1.14V11H2.75A1.75 1.75 0 0 1 1 9.25v-2.5C1 5.784 1.784 5 2.75 5H4.5V3.974a1.474 1.474 0 0 1 2.407-1.14l4.319 3.533c.49.4.774 1 .774 1.632V8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowShapeRightToLine
