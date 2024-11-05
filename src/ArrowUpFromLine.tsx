import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowUpFromLine = ( props: SvgProps ) => (
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
            d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v7.69a.75.75 0 0 1-1.5 0V3.56L6.03 4.78a.75.75 0 0 1-1.06-1.06l2.5-2.5ZM1.75 13.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowUpFromLine
