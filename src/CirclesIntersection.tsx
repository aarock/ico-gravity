import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CirclesIntersection = ( props: SvgProps ) => (
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
            d="M6.576 11.854a4 4 0 1 1 0-7.707A5.482 5.482 0 0 0 5 8c0 1.5.601 2.861 1.576 3.854ZM8 12.9a5.5 5.5 0 1 1 0-9.8 5.5 5.5 0 1 1 0 9.8Zm1.424-8.754A4.003 4.003 0 0 1 14.5 8a4 4 0 0 1-5.076 3.854A5.483 5.483 0 0 0 11 8c0-1.5-.601-2.861-1.576-3.854ZM8 4.877C8.914 5.61 9.5 6.737 9.5 8c0 1.263-.586 2.39-1.5 3.123A3.993 3.993 0 0 1 6.5 8c0-1.263.586-2.39 1.5-3.123Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CirclesIntersection
