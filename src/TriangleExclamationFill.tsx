import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TriangleExclamationFill = ( props: SvgProps ) => (
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
            d="M5.836 2.244c.962-1.665 3.366-1.665 4.328 0l4.917 8.505c.964 1.666-.239 3.751-2.164 3.751H3.083c-1.925 0-3.128-2.085-2.164-3.751l4.917-8.505ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2A.75.75 0 0 1 8 5Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TriangleExclamationFill
