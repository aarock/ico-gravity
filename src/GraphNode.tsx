import { Svg, Path, SvgProps } from "@aarock/ui-core"
const GraphNode = ( props: SvgProps ) => (
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
            d="M5.75 2.5h4.5a1.5 1.5 0 0 1 1.269.7 2.5 2.5 0 0 0 .231 4.686V12a1.5 1.5 0 0 1-1.5 1.5h-4.5c-.534 0-1.003-.28-1.269-.7a2.5 2.5 0 0 0-.231-4.686v-.228A2.501 2.501 0 0 0 4.481 3.2c.266-.42.735-.7 1.269-.7Zm-3 5.614v-.228a2.501 2.501 0 0 1 .146-4.813A3.001 3.001 0 0 1 5.75 1h4.5a3 3 0 0 1 2.854 2.074 2.501 2.501 0 0 1 .146 4.812V12a3 3 0 0 1-3 3h-4.5a3.001 3.001 0 0 1-2.854-2.073 2.501 2.501 0 0 1-.146-4.813ZM3.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm10-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default GraphNode
