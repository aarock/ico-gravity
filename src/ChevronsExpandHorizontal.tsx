import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const ChevronsExpandHorizontal = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <G clipPath="url(#a)">
            <Path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.891 3.58a.75.75 0 0 0-1.06 1.061L14.188 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L15.78 8.53a.75.75 0 0 0 0-1.06l-3.889-3.89ZM4.11 12.42a.75.75 0 0 0 1.06-1.061L1.811 8l3.353-3.354a.75.75 0 1 0-1.06-1.06L.22 7.47a.75.75 0 0 0 0 1.06l3.889 3.89Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <clipPath id="a">
                <Path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </Defs>
    </Svg>
)
export default ChevronsExpandHorizontal
