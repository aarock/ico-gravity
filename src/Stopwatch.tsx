import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Stopwatch = ( props: SvgProps ) => (
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
            d="M6.25 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM13 9A5 5 0 1 1 3 9a5 5 0 0 1 10 0Zm1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.28-7.28a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06ZM8.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 .3.6l1.333 1a.75.75 0 1 0 .9-1.2L8.75 8.625V6Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Stopwatch
