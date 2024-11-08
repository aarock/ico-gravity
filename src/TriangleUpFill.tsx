import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TriangleUpFill = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <Path
            fill="currentColor"
            d="M10.164 2.244c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505Z"
        />
    </Svg>
)
export default TriangleUpFill
