import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutSplitColumns = ( props: SvgProps ) => (
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
            d="M5 12.5H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1ZM3 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 5 2H3A2.5 2.5 0 0 0 .5 4.5v7A2.5 2.5 0 0 0 3 14Zm10-1.5h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1ZM11 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2h-2a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 11 14Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutSplitColumns
