import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CaretsExpandVertical = ( props: SvgProps ) => (
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
            d="M12 6.273a.727.727 0 0 0-.18-.479L8.8 2.342A1 1 0 0 0 8.046 2h-.092a1 1 0 0 0-.753.341L4.18 5.794A.727.727 0 0 0 4.727 7h6.546A.727.727 0 0 0 12 6.273ZM4 9.727c0 .176.064.346.18.479l3.02 3.453a1 1 0 0 0 .753.341h.092a1 1 0 0 0 .753-.341l3.021-3.454A.727.727 0 0 0 11.273 9H4.727A.727.727 0 0 0 4 9.727Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CaretsExpandVertical
