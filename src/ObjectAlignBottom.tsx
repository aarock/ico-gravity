import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignBottom = ( props: SvgProps ) => (
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
            d="M1.75 12.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75ZM7 9.5h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1Zm-2.5-1A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5V4A2.5 2.5 0 0 0 9 1.5H7A2.5 2.5 0 0 0 4.5 4v4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignBottom
