import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Eraser = ( props: SvgProps ) => (
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
            d="m9.646 3.268 2.586 2.586a.914.914 0 0 1 0 1.292L8.72 10.66 4.84 6.78l3.513-3.512a.914.914 0 0 1 1.292 0ZM3.78 7.84 1.768 9.854a.914.914 0 0 0 0 1.292L3.12 12.5h3.76l.78-.78-3.88-3.88Zm9.513.366L9 12.5h6.25a.75.75 0 0 1 0 1.5H2.5L.707 12.207a2.414 2.414 0 0 1 0-3.414l6.586-6.586a2.414 2.414 0 0 1 3.414 0l2.586 2.586a2.414 2.414 0 0 1 0 3.414Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Eraser
