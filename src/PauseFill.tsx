import { Svg, Path, SvgProps } from "@aarock/ui-core"
const PauseFill = ( props: SvgProps ) => (
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
            d="M1.5 3.5a2 2 0 0 1 2-2H5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2v-9Zm7.5 0a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-9Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default PauseFill
