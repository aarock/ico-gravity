import { Svg, Path, SvgProps } from "@aarock/ui-core"
const AbbrApi = ( props: SvgProps ) => (
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
            d="M5.02 11.419 4.691 10H2.808l-.327 1.419a.75.75 0 1 1-1.462-.338L2.407 5.07a1.379 1.379 0 0 1 2.686 0l1.388 6.012a.75.75 0 1 1-1.462.338Zm-1.27-5.5L4.346 8.5H3.154l.596-2.581ZM14.5 4.75a.75.75 0 1 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5ZM8.25 4a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V9.5h.5a2.75 2.75 0 0 0 0-5.5H8.25ZM9.5 8H9V5.5h.5a1.25 1.25 0 0 1 0 2.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default AbbrApi
