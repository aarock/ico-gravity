import { Svg, Path, SvgProps } from "@aarock/ui-core"
const EnvelopeOpenXmark = ( props: SvgProps ) => (
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
            d="M14 6.498V11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V6.498c0-.54.29-1.039.76-1.305l4.5-2.55a1.5 1.5 0 0 1 1.48 0l4.5 2.55c.47.266.76.765.76 1.305Zm-13.5 0a3 3 0 0 1 1.521-2.61l4.5-2.55a3 3 0 0 1 2.958 0l4.5 2.55a3 3 0 0 1 1.521 2.61V11.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V6.498Zm6.03-.528a.75.75 0 0 0-1.06 1.06L6.94 8.5 5.47 9.97a.75.75 0 1 0 1.06 1.06L8 9.56l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8.5l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 7.44 6.53 5.97Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default EnvelopeOpenXmark
