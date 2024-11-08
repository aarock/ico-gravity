import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CreditCard = ( props: SvgProps ) => (
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
            d="M12.5 4h-9A1.5 1.5 0 0 0 2 5.5h12A1.5 1.5 0 0 0 12.5 4ZM2 10.5V7h12v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5Zm1.5-8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-9ZM4.25 9a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CreditCard
