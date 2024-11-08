import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Person = ( props: SvgProps ) => (
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
            d="M10 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c1.68 0 3.162.44 4.18 1.041 1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1Zm5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Person
