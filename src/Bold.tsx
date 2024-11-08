import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Bold = ( props: SvgProps ) => (
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
            d="M4.25 2.25A.75.75 0 0 0 3.5 3v10c0 .414.336.75.75.75H9.5a3.25 3.25 0 0 0 1.477-6.146A3.25 3.25 0 0 0 8.5 2.25H4.25Zm3.5 5a1.75 1.75 0 1 0 0-3.5h-2v3.5h2Zm-2 1.5v3.5h3a1.75 1.75 0 1 0 0-3.5h-3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Bold
