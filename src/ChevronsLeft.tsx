import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ChevronsLeft = ( props: SvgProps ) => (
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
            d="M12.53 5.03a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L9.56 8l2.97-2.97Zm-5 0a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L4.56 8l2.97-2.97Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronsLeft
