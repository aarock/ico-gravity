import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BarsPlay = ( props: SvgProps ) => (
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
            d="M1.75 3.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75Zm.75 3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Zm0 3.75a.75.75 0 0 0 0 1.5h4.25a.75.75 0 0 0 0-1.5H2.5Zm11 3.116a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866l3-1.732Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BarsPlay
