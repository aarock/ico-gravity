import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Sticker = ( props: SvgProps ) => (
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
            d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h3v-2.5a3 3 0 0 1 3-3H13v-3A1.5 1.5 0 0 0 11.5 3Zm1.303 6a1.503 1.503 0 0 1-.242.318l-3.243 3.243a1.503 1.503 0 0 1-.318.242V10.5A1.5 1.5 0 0 1 10.5 9h2.303Zm.818 1.379a3 3 0 0 0 .879-2.122V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h3.757a3 3 0 0 0 2.122-.879l3.242-3.242Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Sticker
