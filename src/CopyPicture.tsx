import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CopyPicture = ( props: SvgProps ) => (
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
            d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5ZM11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-1ZM4 6.5h4A1.5 1.5 0 0 1 9.5 8v2.041l-.568-.52a1.52 1.52 0 0 0-2.014-.032l-1.719 1.473-.602-.452a1.52 1.52 0 0 0-1.805-.013l-.292.212V8A1.5 1.5 0 0 1 4 6.5Zm-1.414 6.001A1.5 1.5 0 0 0 4 13.5h4a1.5 1.5 0 0 0 1.498-1.428L7.92 10.63a.02.02 0 0 0-.026 0l-2.175 1.864-.457.391-.481-.36-1.084-.814a.02.02 0 0 0-.023 0l-1.088.791Zm3.03-4.04a1.154 1.154 0 1 1-2.308 0 1.154 1.154 0 0 1 2.307 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CopyPicture
