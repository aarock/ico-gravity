import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Suitcase = ( props: SvgProps ) => (
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
            d="M9 1.5H7a.5.5 0 0 0-.5.5v1h3V2a.5.5 0 0 0-.5-.5ZM5 2v1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2Zm4.5 2.5H11A1.5 1.5 0 0 1 12.5 6v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V6A1.5 1.5 0 0 1 5 4.5h4.5ZM5.75 6a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Suitcase
