import { Svg, Path, SvgProps } from "@aarock/ui-core"
const PaperPlane = ( props: SvgProps ) => (
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
            d="M7.29 13.904 5.25 10.75 2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.995 2.995l-1.413-.502a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799 3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272 1.413.502-3.296 9.273a2.4 2.4 0 0 1-4.277.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default PaperPlane
