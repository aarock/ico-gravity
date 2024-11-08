import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const HandPointUp = ( props: SvgProps ) => (
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
                d="m6 13.5-3.737-2.906a1.978 1.978 0 0 1 1.694-3.48L5 7.375V1.942a1.942 1.942 0 0 1 3.838-.421L9.5 4.5l2.744.457a3 3 0 0 1 2.405 3.732L13.5 13l-7.5.5Zm7.2-5.197-.872 3.272-5.858.39L3.184 9.41a.478.478 0 0 1 .41-.84l1.042.26 1.864.466V1.942a.442.442 0 0 1 .874-.096l.662 2.98.22.987.997.167 2.744.457A1.5 1.5 0 0 1 13.2 8.303Zm.103 7.195a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 0 0 .106 1.496l7-.5Z"
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
export default HandPointUp
