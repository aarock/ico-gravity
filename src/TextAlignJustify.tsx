import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TextAlignJustify = ( props: SvgProps ) => (
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
            d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25ZM2.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Zm0 3.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TextAlignJustify
