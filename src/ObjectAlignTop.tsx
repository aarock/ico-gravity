import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignTop = ( props: SvgProps ) => (
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
            d="M1.75 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75ZM7 6.5h2a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1Zm-2.5 1A2.5 2.5 0 0 1 7 5h2a2.5 2.5 0 0 1 2.5 2.5V12A2.5 2.5 0 0 1 9 14.5H7A2.5 2.5 0 0 1 4.5 12V7.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignTop
