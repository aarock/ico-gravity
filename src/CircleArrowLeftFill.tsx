import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleArrowLeftFill = ( props: SvgProps ) => (
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
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3-6.25a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H11Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleArrowLeftFill
