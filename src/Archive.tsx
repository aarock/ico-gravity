import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Archive = ( props: SvgProps ) => (
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
            d="M2.5 8h11v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V8Zm10.697-1.5-1.851-2.777a.5.5 0 0 0-.416-.223H5.07a.5.5 0 0 0-.416.223L2.803 6.5h10.394ZM15 7.408V11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7.408a3 3 0 0 1 .504-1.664l1.902-2.853A2 2 0 0 1 5.07 2h5.86a2 2 0 0 1 1.664.89l1.902 2.854A3 3 0 0 1 15 7.408ZM9.25 11a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Archive
