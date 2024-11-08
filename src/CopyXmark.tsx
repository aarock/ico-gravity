import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CopyXmark = ( props: SvgProps ) => (
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
            d="M9.5 12c0 .414-.168.79-.44 1.06A1.49 1.49 0 0 1 8 13.5H4a1.49 1.49 0 0 1-1.06-.44A1.496 1.496 0 0 1 2.5 12V8c0-.414.168-.79.44-1.06A1.49 1.49 0 0 1 4 6.5h4c.414 0 .79.168 1.06.44.272.27.44.646.44 1.06v4Zm-1.47-1.03s.001 0 0 0L7.06 10l.97-.97a.75.75 0 0 0-1.06-1.06L6 8.94l-.97-.97a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 0 0 1.06 1.06c0 .001 0 0 0 0l.97-.97.97.97a.75.75 0 0 0 1.06-1.06ZM6.5 5H8a3 3 0 0 1 3 3v1.5h1A1.498 1.498 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4v1ZM5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CopyXmark
