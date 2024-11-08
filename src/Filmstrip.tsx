import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Filmstrip = ( props: SvgProps ) => (
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
            d="M11.5 3.5h.5A1.5 1.5 0 0 1 13.5 5v.5h-2v-2Zm0 3.5v2h2V7h-2ZM15 7v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2Zm-1.5 3.5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5v-.5Zm-3.5-7H6v9h4v-9Zm-5.5 9v-2h-2v.5A1.5 1.5 0 0 0 4 12.5h.5Zm0-5.5v2h-2V7h2Zm0-1.5h-2V5A1.5 1.5 0 0 1 4 3.5h.5v2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Filmstrip
