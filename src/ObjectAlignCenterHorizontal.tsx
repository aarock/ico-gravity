import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignCenterHorizontal = ( props: SvgProps ) => (
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
            d="M13 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm-1-2.5A2.5 2.5 0 0 1 14.5 7v2a2.5 2.5 0 0 1-2.5 2.5H8.75v2.75a.75.75 0 0 1-1.5 0V11.5H4A2.5 2.5 0 0 1 1.5 9V7A2.5 2.5 0 0 1 4 4.5h3.25V1.75a.75.75 0 1 1 1.5 0V4.5H12Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignCenterHorizontal
