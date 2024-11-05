import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutCells = ( props: SvgProps ) => (
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
            d="M9.25 3.5h-2.5v2h2.5v-2ZM4 3.5h1.25v2H2.5V5A1.5 1.5 0 0 1 4 3.5ZM2.5 7h2.75v2H2.5V7Zm0 3.5v.5A1.5 1.5 0 0 0 4 12.5h1.25v-2H2.5Zm4.25 0v2h2.5v-2h-2.5Zm4 0v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5h-2.75ZM13.5 9h-2.75V7h2.75v2ZM9.25 9h-2.5V7h2.5v2Zm1.5-5.5v2h2.75V5A1.5 1.5 0 0 0 12 3.5h-1.25ZM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutCells
