import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutHeaderSideContent = ( props: SvgProps ) => (
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
            d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5ZM2.5 11V7h2v5.5H4A1.5 1.5 0 0 1 2.5 11ZM6 12.5h6a1.5 1.5 0 0 0 1.5-1.5V7H6v5.5ZM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutHeaderSideContent
