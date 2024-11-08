import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutRows3 = ( props: SvgProps ) => (
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
            d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5ZM2.5 9V7h11v2h-11Zm0 1.5v.5A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5h-11ZM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutRows3
