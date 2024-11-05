import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Heading = ( props: SvgProps ) => (
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
            d="M4.25 2.25A.75.75 0 0 1 5 3v4.25h6V3a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0V8.75H5V13a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Heading
