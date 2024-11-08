import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FolderExclamation = ( props: SvgProps ) => (
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
            d="m6.879 4.5-.44-.44-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5H6.879ZM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5H3.5Zm5.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25-4.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FolderExclamation
