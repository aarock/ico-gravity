import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Cubes3 = ( props: SvgProps ) => (
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
            d="M6.5 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM4 3A2.5 2.5 0 0 1 6.5.5h3A2.5 2.5 0 0 1 12 3v3c0 .356-.074.694-.208 1H13a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 13 15H3a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 3 7h1.208A2.492 2.492 0 0 1 4 6V3Zm2.25 5.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3.25Zm3.5 5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Cubes3
