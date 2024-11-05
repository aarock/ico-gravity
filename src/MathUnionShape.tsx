import { Svg, Path, SvgProps } from "@aarock/ui-core"
const MathUnionShape = ( props: SvgProps ) => (
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
            d="M3 2.75V8.5a5 5 0 0 0 10 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25V8.5a3 3 0 1 1-6 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25ZM1.5 8.5V2.75C1.5 1.784 2.284 1 3.25 1h1.5c.966 0 1.75.784 1.75 1.75V8.5a1.5 1.5 0 1 0 3 0V2.75c0-.966.784-1.75 1.75-1.75h1.5c.966 0 1.75.784 1.75 1.75V8.5a6.5 6.5 0 0 1-13 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default MathUnionShape
