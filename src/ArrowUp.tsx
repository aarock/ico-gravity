import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowUp = ( props: SvgProps ) => (
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
            d="M8 14.75a.75.75 0 0 1-.75-.75V3.81L4.53 6.53a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.75 3.81V14a.75.75 0 0 1-.75.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowUp
