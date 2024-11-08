import { Svg, Path, SvgProps, G } from "@aarock/ui-core"
const CopyCheck = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <G fill="currentColor">
            <Path d="m8 9.076.085-.107a.751.751 0 1 0-1.171-.937L5.438 9.877 5.03 9.47a.747.747 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.407.408.593.592a.75.75 0 0 0 1.116-.061l.522-.654h.001L8 9.074Z" />
            <Path
                fillRule="evenodd"
                d="M12 11a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-1h1ZM4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.498 1.498 0 0 0 8 6.5H4ZM13.5 4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.498 1.498 0 0 0 13.5 8V4Z"
                clipRule="evenodd"
            />
        </G>
    </Svg>
)
export default CopyCheck
