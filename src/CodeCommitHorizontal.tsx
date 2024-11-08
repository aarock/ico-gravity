import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CodeCommitHorizontal = ( props: SvgProps ) => (
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
            d="M14.25 7.25h-2.32a4.001 4.001 0 0 0-7.86 0H1.75a.75.75 0 0 0 0 1.5h2.32a4.001 4.001 0 0 0 7.86 0h2.32a.75.75 0 0 0 0-1.5ZM5.5 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CodeCommitHorizontal
