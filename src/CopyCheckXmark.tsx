import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CopyCheckXmark = ( props: SvgProps ) => (
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
            d="M4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.498 1.498 0 0 0 8 6.5H4Zm6-1.56.97-.97a.75.75 0 0 1 1.06 1.06s.001 0 0 0l-.97.97.97.97A.75.75 0 0 1 11 8.059V9.5h1A1.498 1.498 0 0 0 13.5 8V4c0-.414-.168-.79-.44-1.06A1.496 1.496 0 0 0 12 2.5H8a1.495 1.495 0 0 0-1.415 1A1.498 1.498 0 0 0 6.5 4v1h1.441A.748.748 0 0 1 8 3.941a.75.75 0 0 1 1.03.028l.97.97ZM8 9.075l.085-.107L8 9.076Zm0 0-1.39 1.738-.002.001-.522.654a.75.75 0 0 1-1.116.061l-1-1s0 .001 0 0a.75.75 0 0 1 1.06-1.06l.408.407 1.476-1.845a.75.75 0 1 1 1.171.937m-3.17 1.563ZM15 8a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CopyCheckXmark
