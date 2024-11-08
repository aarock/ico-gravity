import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareChartBar = ( props: SvgProps ) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm3.75 5.498a.75.75 0 0 0 0 1.5h2.002a.75.75 0 0 0 0-1.5H5.25ZM4.5 8a.75.75 0 0 1 .75-.75h5.502a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 8Zm.75-3.498a.75.75 0 0 0 0 1.5h3.502a.75.75 0 0 0 0-1.5H5.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareChartBar
