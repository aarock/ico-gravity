import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BarsDescendingAlignRight = ( props: SvgProps ) => (
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
            d="M15 3.25a.75.75 0 0 0-.75-.75H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 .75-.75ZM15 8a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5A.75.75 0 0 0 15 8Zm-.75 4a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h2.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BarsDescendingAlignRight