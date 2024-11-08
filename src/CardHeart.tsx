import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CardHeart = ( props: SvgProps ) => (
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
            d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4ZM11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6ZM4.75 7.333c0-1.148.734-2.084 1.846-2.084.613 0 1.253.595 1.404 1.501.15-.915.791-1.5 1.404-1.5 1.112 0 1.846.935 1.846 2.083 0 1.895-1.69 3.1-3.1 3.878a.307.307 0 0 1-.3-.001c-1.412-.786-3.1-1.973-3.1-3.877Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CardHeart
