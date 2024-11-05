import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ArrowRotateLeft = ( props: SvgProps ) => (
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
            d="M8 1.5a6.5 6.5 0 1 1-6.445 7.348.75.75 0 1 1 1.487-.194A5.001 5.001 0 1 0 4.43 4.5h1.32a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 2 5.25v-3a.75.75 0 0 1 1.5 0v1.06A6.48 6.48 0 0 1 8 1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ArrowRotateLeft
