import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareCheck = ( props: SvgProps ) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm10.092 1.46a.75.75 0 0 0-1.184-.92L7.43 8.869l-1.4-1.4A.75.75 0 0 0 4.97 8.53l2 2a.75.75 0 0 0 1.122-.07l3.5-4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareCheck
