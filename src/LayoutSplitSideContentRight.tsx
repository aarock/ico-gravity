import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutSplitSideContentRight = ( props: SvgProps ) => (
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
            d="M3 12.5h4.5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1ZM7.5 14H3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 3 2h4.5A2.5 2.5 0 0 1 10 4.5v7A2.5 2.5 0 0 1 7.5 14Zm5.5-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5Zm.5 1.5H13a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutSplitSideContentRight
