import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Ban = ( props: SvgProps ) => (
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
            d="M11.323 12.383a5.5 5.5 0 0 1-7.706-7.706l7.706 7.706Zm1.06-1.06L4.677 3.617a5.5 5.5 0 0 1 7.706 7.706ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Ban
