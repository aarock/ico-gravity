import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutHeaderCursor = ( props: SvgProps ) => (
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
            d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5V5h-11v-.5A1.5 1.5 0 0 1 4 3Zm9.5 5.25V6.5h-11V10A1.5 1.5 0 0 0 4 11.5h2.75a.75.75 0 0 1 0 1.5H4a3 3 0 0 1-3-3V4.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.75a.75.75 0 0 1-1.5 0Zm-3.272-.078A.75.75 0 0 0 9 8.75v5.543a.75.75 0 0 0 1.335.47l.898-1.12.846 1.692a.75.75 0 1 0 1.342-.67l-.827-1.654H14a.75.75 0 0 0 .478-1.328l-4.25-3.511Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutHeaderCursor
