import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CaretUp = ( props: SvgProps ) => (
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
            d="M11.823 9.295a.73.73 0 0 1-.552 1.205H4.729a.73.73 0 0 1-.552-1.205L7.2 5.786a1 1 0 0 1 .757-.347h.084a1 1 0 0 1 .757.347l3.024 3.509Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CaretUp
