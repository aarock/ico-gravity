import { Svg, Path, SvgProps } from "@aarock/ui-core"
const PinSlash = ( props: SvgProps ) => (
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
            d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.966 1.5 8 1.5c-.967 0-1.703.169-2.138.394-.375.194-.365.32-.362.351v.01c0 .008-.002.024.005.048L4.38 1.179C5.02.393 6.4 0 8 0c2.21 0 4 .75 4 2.25 0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52 0 .617-.266 1.138-.734 1.565l-1.061-1.061c.27-.227.295-.41.295-.503 0-.128-.035-.259-.226-.439-.223-.209-.63-.448-1.278-.649l-.552-.17-.228-.228-.19-.53-.84-2.352a8.304 8.304 0 0 1-1.739.113l-1.96-1.96c.037.023.077.046.125.07C6.297 2.832 7.033 3 8 3c.967 0 1.703-.169 2.139-.394.374-.194.364-.32.361-.351Zm-.008 9.297 2.478 2.478a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06l2.567 2.567-.226.632C2.758 6.71 1.75 7.55 1.75 8.75c0 1.854 2.402 2.848 5.5 2.985V15a.75.75 0 0 0 1.5 0v-3.266a13.889 13.889 0 0 0 1.742-.182Zm-1.345-1.345L5.71 6.771l-.239.67-.717.221c-.648.2-1.055.44-1.277.65-.192.18-.227.31-.227.438 0 .14.055.488.937.878.869.384 2.2.622 3.813.622.4 0 .784-.015 1.147-.043Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default PinSlash