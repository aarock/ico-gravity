import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ShoppingBag = ( props: SvgProps ) => (
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
            d="M5.174 3h5.652a1.5 1.5 0 0 1 1.49 1.328l.808 7A1.5 1.5 0 0 1 11.634 13H4.366a1.5 1.5 0 0 1-1.49-1.672l.808-7A1.5 1.5 0 0 1 5.174 3Zm-2.98 1.156A3 3 0 0 1 5.174 1.5h5.652a3 3 0 0 1 2.98 2.656l.808 7a3 3 0 0 1-2.98 3.344H4.366a3 3 0 0 1-2.98-3.344l.808-7ZM5 5.25a.75.75 0 0 1 1.5 0v.25a1.5 1.5 0 1 0 3 0v-.25a.75.75 0 0 1 1.5 0v.25a3 3 0 0 1-6 0v-.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ShoppingBag