import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Geo = ( props: SvgProps ) => (
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
            d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987l4.68 2.978L10.293 3ZM3 5.707V11.5c0 .648.411 1.2.987 1.41l2.978-4.68L3 5.707ZM5.707 13H11.5a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.987-1.41l-3.38 5.313L5.707 13ZM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Geo
