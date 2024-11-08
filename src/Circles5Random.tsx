import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Circles5Random = ( props: SvgProps ) => (
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
            d="M1.069 5.55A2.497 2.497 0 0 0 5 3.5a2.5 2.5 0 1 0-3.931 2.05ZM2.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11 1.5A2.497 2.497 0 0 1 11 3.5 2.5 2.5 0 1 1 13.5 6Zm1-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.069 8.55A2.497 2.497 0 0 0 10 6.5a2.5 2.5 0 1 0-3.931 2.05ZM7.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 14a2.497 2.497 0 0 1-2.5-2.5A2.5 2.5 0 1 1 12 14Zm1-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.5 16A2.497 2.497 0 0 1 2 13.5 2.5 2.5 0 1 1 4.5 16Zm1-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Circles5Random
