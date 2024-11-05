import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CopyChevronRight = ( props: SvgProps ) => (
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
            d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5Zm4 8.5h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3ZM8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5Zm-1.97 5.78a.75.75 0 0 1-1.06-1.06L6.19 10 4.97 8.78a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CopyChevronRight
