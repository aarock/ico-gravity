import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Sphere = ( props: SvgProps ) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 4a.75.75 0 0 0 0 1.5A2.5 2.5 0 0 1 10.5 8 .75.75 0 1 0 12 8a4 4 0 0 0-4-4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Sphere
