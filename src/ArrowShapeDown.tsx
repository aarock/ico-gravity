import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowShapeDown = ( props: SvgProps ) => (
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
            d="M6 7.5H3.33a.33.33 0 0 0-.252.542l4.42 5.225a.656.656 0 0 0 1.003 0l4.42-5.225a.33.33 0 0 0-.251-.542H10V3a.5.5 0 0 0-.5-.5h-3A.5.5 0 0 0 6 3v4.5ZM4.5 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3h1.17a1.83 1.83 0 0 1 1.397 3.011l-4.421 5.225a2.156 2.156 0 0 1-3.292 0L1.933 9.011A1.83 1.83 0 0 1 3.329 6H4.5V3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowShapeDown
