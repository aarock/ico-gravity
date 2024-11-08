import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowShapeUpFromLine = ( props: SvgProps ) => (
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
            d="M9.5 7h2.471L8.472 2.724a.61.61 0 0 0-.944 0L4.029 7H6.5v3.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V7Zm-2.75 5h2.501A1.75 1.75 0 0 0 11 10.25V8.5h1.026a1.474 1.474 0 0 0 1.14-2.407L9.634 1.774a2.11 2.11 0 0 0-3.266 0L2.833 6.093A1.474 1.474 0 0 0 3.973 8.5H5v1.75c0 .966.784 1.75 1.75 1.75Zm7.5 1.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowShapeUpFromLine
