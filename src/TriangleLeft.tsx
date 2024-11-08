import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TriangleLeft = ( props: SvgProps ) => (
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
            d="M2.995 7.134 11.5 2.217a1 1 0 0 1 1.5.866v9.834a1 1 0 0 1-1.5.866L2.995 8.866a1 1 0 0 1 0-1.732Zm-.751 3.03c-1.665-.962-1.665-3.366 0-4.329L10.749.918c1.666-.963 3.751.24 3.751 2.165v9.834c0 1.925-2.085 3.128-3.751 2.164l-8.505-4.917Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TriangleLeft
