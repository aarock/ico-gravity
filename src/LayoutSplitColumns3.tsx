import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutSplitColumns3 = ( props: SvgProps ) => (
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
            d="M2.5 12.5H3a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5A.5.5 0 0 0 2 4v8a.5.5 0 0 0 .5.5ZM3 14h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2H3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm4.75-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5Zm.5 1.5h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm5.25-1.5H13a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5ZM13 14h.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutSplitColumns3
