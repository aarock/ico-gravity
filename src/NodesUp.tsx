import { Svg, Path, SvgProps } from "@aarock/ui-core"
const NodesUp = ( props: SvgProps ) => (
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
            d="M2.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4 2a3 3 0 1 0 .79 5.895L5.908 9.85a3 3 0 1 0 4.185 0l1.117-1.955A3.003 3.003 0 0 0 15 5a3 3 0 1 0-5.092 2.15L8.79 9.105a3.003 3.003 0 0 0-1.58 0L6.092 7.15A3 3 0 0 0 4 2Zm6.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM8 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default NodesUp
