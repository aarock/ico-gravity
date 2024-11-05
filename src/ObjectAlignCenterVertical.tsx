import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignCenterVertical = ( props: SvgProps ) => (
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
            d="M7 3h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM4.5 4A2.5 2.5 0 0 1 7 1.5h2A2.5 2.5 0 0 1 11.5 4v3.25h2.75a.75.75 0 0 1 0 1.5H11.5V12A2.5 2.5 0 0 1 9 14.5H7A2.5 2.5 0 0 1 4.5 12V8.75H1.75a.75.75 0 0 1 0-1.5H4.5V4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignCenterVertical
