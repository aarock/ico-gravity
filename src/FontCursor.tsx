import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FontCursor = ( props: SvgProps ) => (
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
            d="M10 2.25a.75.75 0 0 1 .75-.75c.576 0 1.102.217 1.5.573a2.242 2.242 0 0 1 1.5-.573.75.75 0 0 1 0 1.5.75.75 0 0 0-.75.75v8.75c0 .414.336.75.75.75a.75.75 0 0 1 0 1.5 2.242 2.242 0 0 1-1.5-.573 2.242 2.242 0 0 1-1.5.573.75.75 0 0 1 0-1.5.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75ZM5.75 3c-.618 0-1.168.39-1.374.972L1.543 12a.75.75 0 1 0 1.414.5L3.84 10h3.82l.883 2.5a.75.75 0 1 0 1.414-.5L7.124 3.972A1.457 1.457 0 0 0 5.75 3Zm1.381 5.5L5.75 4.587 4.369 8.5H7.13Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FontCursor
