import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Compass = ( props: SvgProps ) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-6.09 2.303-2.899.805a.909.909 0 0 1-1.12-1.119l.806-2.9A2 2 0 0 1 7.09 5.697l2.9-.805a.909.909 0 0 1 1.12 1.119l-.806 2.9a2 2 0 0 1-1.392 1.392ZM9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Compass
