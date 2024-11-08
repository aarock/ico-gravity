import { Svg, Path, SvgProps } from "@aarock/ui-core"
const AbbrZip = ( props: SvgProps ) => (
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
            d="M1 4.75A.75.75 0 0 1 1.75 4h3.113a1.137 1.137 0 0 1 .96 1.748L2.797 10.5H5.25a.75.75 0 0 1 0 1.5H2.137a1.137 1.137 0 0 1-.96-1.748L4.203 5.5H1.75A.75.75 0 0 1 1 4.75ZM7.75 4a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.75 4Zm3 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V9.5h.5A2.75 2.75 0 1 0 12 4h-1.25ZM12 8h-.5V5.5h.5A1.25 1.25 0 1 1 12 8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default AbbrZip
