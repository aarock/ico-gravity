import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Gift = ( props: SvgProps ) => (
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
            d="m9.035 3.863.182-1.276a.918.918 0 0 1 .818-.783.914.914 0 0 1 .272 1.805l-1.272.254ZM7.25 5.5v2H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h4.25ZM8 1.565A2.415 2.415 0 1 0 3.83 4H3a2 2 0 0 0-2 2v1a2 2 0 0 0 1 1.732V12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8.732A2 2 0 0 0 15 7V6a2 2 0 0 0-2-2h-.83A2.415 2.415 0 1 0 8 1.565Zm.75 4.185V7.5H13a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H8.75v.25ZM7.25 9H3.5v3A1.5 1.5 0 0 0 5 13.5h2.25V9Zm1.5 4.5V9h3.75v3a1.5 1.5 0 0 1-1.5 1.5H8.75ZM6.783 2.587l.182 1.276-1.272-.254a.914.914 0 0 1 .272-1.805.919.919 0 0 1 .818.783Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Gift
