import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Dots9 = ( props: SvgProps ) => (
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
            d="M9.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Dots9