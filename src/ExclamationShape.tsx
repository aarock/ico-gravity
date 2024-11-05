import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const ExclamationShape = ( props: SvgProps ) => (
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
                d="m8.91 1.762-.325 6.5a.25.25 0 0 1-.25.238h-.67a.25.25 0 0 1-.25-.238l-.325-6.5a.25.25 0 0 1 .25-.262h1.32a.25.25 0 0 1 .25.262Zm1.173 6.575.325-6.5A1.75 1.75 0 0 0 8.66 0H7.34a1.75 1.75 0 0 0-1.748 1.837l.325 6.5A1.75 1.75 0 0 0 7.665 10h.67a1.75 1.75 0 0 0 1.748-1.663ZM8 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.5 1a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
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
export default ExclamationShape
