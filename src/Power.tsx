import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Power = ( props: SvgProps ) => (
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
            d="M8.75 1.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM4.92 3.442A.75.75 0 1 0 4.08 2.2a7 7 0 1 0 7.841 0 .75.75 0 1 0-.841 1.242 5.5 5.5 0 1 1-6.159 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Power
