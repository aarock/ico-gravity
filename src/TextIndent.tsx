import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TextIndent = ( props: SvgProps ) => (
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
            d="M13.25 2H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5Zm0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm-10.5 3.5h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5Zm.49-7a.74.74 0 0 1 .463.162l1.906 1.526a1.04 1.04 0 0 1 0 1.624l-1.906 1.526A.74.74 0 0 1 2.5 9.76V6.24a.74.74 0 0 1 .74-.74Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TextIndent
