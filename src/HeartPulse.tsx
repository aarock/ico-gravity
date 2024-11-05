import { Svg, Path, SvgProps } from "@aarock/ui-core"
const HeartPulse = ( props: SvgProps ) => (
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
            d="M4.76 1.5c-1.123 0-2.102.354-2.844 1.015C1.177 3.174.723 4.092.564 5.138a.75.75 0 1 0 1.483.225c.115-.754.428-1.336.867-1.728.437-.39 1.048-.636 1.846-.636.965 0 2.094.63 2.527 1.95a.75.75 0 0 0 1.426 0c.434-1.322 1.551-1.95 2.527-1.95.9 0 1.568.314 2.016.805.456.498.744 1.246.744 2.209 0 1.607-.818 2.985-2.061 4.182-1.147 1.103-2.602 1.996-3.937 2.707-1.339-.717-2.788-1.6-3.932-2.692a.75.75 0 1 0-1.036 1.085c1.402 1.338 3.16 2.357 4.618 3.12a.75.75 0 0 0 .693 0c1.463-.756 3.228-1.787 4.633-3.139 1.41-1.355 2.522-3.098 2.522-5.263 0-1.26-.38-2.393-1.136-3.221-.764-.835-1.85-1.293-3.124-1.293-1.174 0-2.412.551-3.24 1.626-.833-1.075-2.076-1.626-3.24-1.626Zm.85 4.314a.75.75 0 0 0-1.108-.125L2.465 7.5H.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .498-.19l1.627-1.445 2.015 2.821a.75.75 0 0 0 1.21.014l1.275-1.7H11A.75.75 0 0 0 11 7H9a.75.75 0 0 0-.6.3l-.885 1.18L5.61 5.814Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default HeartPulse
