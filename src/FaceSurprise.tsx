import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FaceSurprise = ( props: SvgProps ) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0v1ZM6 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 6 8Zm2 4c1.37 0 2.5-.5 2.5-1.5S9.5 9 8 9s-2.5.5-2.5 1.5S6.5 12 8 12Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FaceSurprise
