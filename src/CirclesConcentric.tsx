import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CirclesConcentric = ( props: SvgProps ) => (
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
            d="M2.5 8a5.5 5.5 0 0 1 8.14-4.827.75.75 0 1 0 .72-1.315 7 7 0 0 0-9.502 9.502.75.75 0 0 0 1.315-.72A5.472 5.472 0 0 1 2.5 8Zm11.642-3.36a.75.75 0 1 0-1.315.72 5.5 5.5 0 0 1-7.466 7.466.75.75 0 1 0-.722 1.316 7 7 0 0 0 9.502-9.502ZM9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CirclesConcentric