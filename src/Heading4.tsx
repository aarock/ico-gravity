import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Heading4 = ( props: SvgProps ) => (
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
            d="M14.25 4.25a.75.75 0 0 0-1.347-.454l-4 5.25A.75.75 0 0 0 9.5 10.25h3.25v1.496a.75.75 0 0 0 1.5 0V10.25h.25a.75.75 0 1 0 0-1.5h-.25v-4.5Zm-1.5 2.222V8.75h-1.736l1.736-2.278ZM2.5 4.25a.75.75 0 1 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 1 0-1.5 0v3h-4v-3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Heading4
