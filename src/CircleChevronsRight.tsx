import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleChevronsRight = ( props: SvgProps ) => (
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
            d="M2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm3.97 2.28a.75.75 0 0 1 0-1.06L6.19 8 4.97 6.78a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0Zm3.75-1.06a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06L9.78 5.72a.75.75 0 0 0-1.06 1.06L9.94 8 8.72 9.22Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleChevronsRight
