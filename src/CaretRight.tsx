import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CaretRight = ( props: SvgProps ) => (
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
            d="M6.705 11.823a.73.73 0 0 1-1.205-.552V4.729a.73.73 0 0 1 1.205-.552L10.214 7.2a1 1 0 0 1 .347.757v.084a1 1 0 0 1-.347.757l-3.509 3.024Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CaretRight
