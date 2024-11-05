import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ChevronsUp = ( props: SvgProps ) => (
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
            d="M10.97 12.53a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L8 9.56l2.97 2.97Zm0-5a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06L8 4.56l2.97 2.97Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronsUp
