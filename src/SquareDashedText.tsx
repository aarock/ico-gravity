import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareDashedText = ( props: SvgProps ) => (
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
            d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0V4.5Zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3H9.75ZM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5V9.75Zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3V9.75ZM5.752 4.502a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 2.75a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 2.75a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareDashedText
