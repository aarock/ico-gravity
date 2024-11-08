import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowShapeRightFromLine = ( props: SvgProps ) => (
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
            d="M9 9.5v2.471l4.276-3.499a.61.61 0 0 0 0-.944L9 4.029V6.5H5.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25H9ZM4 6.75v2.501A1.75 1.75 0 0 0 5.75 11H7.5v1.026a1.474 1.474 0 0 0 2.407 1.14l4.319-3.533a2.11 2.11 0 0 0 0-3.266L9.907 2.833A1.474 1.474 0 0 0 7.5 3.973V5H5.75A1.75 1.75 0 0 0 4 6.75Zm-1.5 7.5a.75.75 0 0 1-1.5 0V1.75a.75.75 0 0 1 1.5 0v12.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowShapeRightFromLine
