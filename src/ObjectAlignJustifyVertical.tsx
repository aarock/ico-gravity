import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectAlignJustifyVertical = ( props: SvgProps ) => (
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
            d="M1 14.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM7 11h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm2 1.5a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 9 3.5H7A2.5 2.5 0 0 0 4.5 6v4A2.5 2.5 0 0 0 7 12.5h2ZM1.75 1a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectAlignJustifyVertical
