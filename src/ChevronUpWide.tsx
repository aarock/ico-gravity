import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ChevronUpWide = ( props: SvgProps ) => (
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
            d="M1.867 9.903a.75.75 0 0 0 1.036.23L8 6.889l5.097 3.244a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 0 0-.23 1.036Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ChevronUpWide
