import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareChartColumn = ( props: SvgProps ) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm8.499 6.251a.75.75 0 0 0 1.5 0V8.749a.75.75 0 0 0-1.5 0v2.002Zm-1.998.75a.75.75 0 0 1-.75-.75V5.249a.75.75 0 1 1 1.5 0v5.502a.75.75 0 0 1-.75.75Zm-3.498-.75a.75.75 0 0 0 1.5 0V7.249a.75.75 0 1 0-1.5 0v3.502Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareChartColumn
