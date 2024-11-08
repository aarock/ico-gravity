import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Camera = ( props: SvgProps ) => (
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
            d="M4.273 5h1.05l.36-.987.248-.684A.5.5 0 0 1 6.401 3h3.198a.5.5 0 0 1 .47.33l.249.683.359.987H12a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V6.5A1.5 1.5 0 0 1 4 5h.273ZM6.4 1.5a2 2 0 0 0-1.88 1.317l-.248.683H4a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6.5a3 3 0 0 0-3-3h-.273l-.248-.683A2 2 0 0 0 9.599 1.5H6.401Zm3.099 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Camera
