import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BookmarkFill = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <Path
            fill="currentColor"
            d="M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3h6Z"
        />
    </Svg>
)
export default BookmarkFill
