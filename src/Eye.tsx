import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Eye = ( props: SvgProps ) => (
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
            d="M1.87 8.515 1.641 8l.229-.515a6.708 6.708 0 0 1 12.26 0l.228.515-.229.515a6.708 6.708 0 0 1-12.259 0ZM.5 6.876l-.26.585a1.328 1.328 0 0 0 0 1.079l.26.584a8.208 8.208 0 0 0 15 0l.26-.584a1.328 1.328 0 0 0 0-1.08l-.26-.584a8.208 8.208 0 0 0-15 0ZM9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Eye
