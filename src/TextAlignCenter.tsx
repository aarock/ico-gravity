import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TextAlignCenter = ( props: SvgProps ) => (
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
            d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Zm0 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Zm2 3.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5ZM4 6.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 6.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TextAlignCenter
