import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Equal = ( props: SvgProps ) => (
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
            d="M13.5 11a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5h11Zm0-4.5a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5h11Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Equal
