import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareBrackets = ( props: SvgProps ) => (
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
            d="M3.75 1A2.25 2.25 0 0 0 1.5 3.25v9.5A2.25 2.25 0 0 0 3.75 15h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 0 0-1.5h-.5Zm8.5 14a2.25 2.25 0 0 0 2.25-2.25v-9.5A2.25 2.25 0 0 0 12.25 1h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5h.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareBrackets
