import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const Crop = ( props: SvgProps ) => (
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
                d="M3.5 0a.75.75 0 0 1 .75.75V2.5h8.25a.75.75 0 0 1 .75.75v8.5h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2H3.5a.75.75 0 0 1-.75-.75V4h-2a.75.75 0 0 1 0-1.5h2V.75A.75.75 0 0 1 3.5 0Zm.75 4v7.75h7.5V4h-7.5Z"
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
export default Crop
