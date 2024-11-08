import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FaceFun = ( props: SvgProps ) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM4.75 9.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75c0 .686-.43 1.319-.974 1.746-.57.447-1.358.754-2.276.754-.918 0-1.706-.307-2.276-.754-.543-.427-.974-1.06-.974-1.746ZM10 7.5a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75Zm-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0v1Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FaceFun
