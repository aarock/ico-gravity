import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CardSpade = ( props: SvgProps ) => (
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
            d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4ZM11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6ZM9.296 9.5C10.279 9.5 11 8.803 11 7.855c0-1.308-1.38-2.246-2.464-2.983-.19-.13-.372-.254-.536-.372-.162.117-.342.24-.53.368C6.384 5.608 5 6.55 5 7.855 5 8.803 5.721 9.5 6.704 9.5c.388 0 .716-.124.974-.345a3.018 3.018 0 0 1-.812 1.479L6.5 11v.5h3V11l-.366-.366a3.018 3.018 0 0 1-.812-1.479c.258.221.587.345.974.345Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CardSpade
