import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Keyboard = ( props: SvgProps ) => (
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
            d="M3 4h10a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 12H3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 3 4ZM0 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-5Zm6.25 3.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Keyboard
