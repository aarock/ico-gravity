import { Svg, Path, SvgProps } from "@aarock/ui-core"
const AbbrMl = ( props: SvgProps ) => (
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
            d="M2.5 11.25V6.672l1.436 3.39a1.129 1.129 0 0 0 2.076.008l1.513-3.492v4.672a.75.75 0 0 0 1.5 0V5.218a1.218 1.218 0 0 0-2.335-.484L4.98 8.679 3.307 4.732A1.201 1.201 0 0 0 1 5.202v6.048a.75.75 0 1 0 1.5 0Zm9.5-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H12V4.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default AbbrMl
