import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowLeftFromLine = ( props: SvgProps ) => (
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
            d="M1.22 8.53a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L3.56 7.25h7.69a.75.75 0 0 1 0 1.5H3.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5Zm12.28 5.72a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0v12.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowLeftFromLine
