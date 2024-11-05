import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutSideContent = ( props: SvgProps ) => (
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
            d="M6 3.5h6A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5H6v-9Zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h.5v-9ZM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutSideContent
