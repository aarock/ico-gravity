import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignRight = ( props: SvgProps ) => (
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
            d="M12.5 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0v12.5ZM9.5 7v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1Zm-1-2.5A2.5 2.5 0 0 1 11 7v2a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 9V7A2.5 2.5 0 0 1 4 4.5h4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignRight
