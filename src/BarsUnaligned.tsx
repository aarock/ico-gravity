import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BarsUnaligned = ( props: SvgProps ) => (
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
            d="M2.75 2.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75ZM4 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 8Zm-4 4.75A.75.75 0 0 1 .75 12h10.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BarsUnaligned
