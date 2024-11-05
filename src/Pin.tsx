import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Pin = ( props: SvgProps ) => (
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
            d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.966 1.5 8 1.5c-.967 0-1.703.169-2.138.394-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3c.967 0 1.703-.169 2.139-.394.374-.194.364-.32.361-.351ZM8 4.5c.506 0 .99-.04 1.436-.118l.84 2.352.253.707.717.221c.648.2 1.055.44 1.277.65.192.18.227.31.227.438 0 .14-.055.488-.937.878-.869.384-2.2.622-3.813.622s-2.944-.238-3.813-.622c-.882-.39-.937-.738-.937-.878 0-.128.035-.259.227-.439.222-.209.629-.448 1.277-.649l.717-.221.253-.707.84-2.352c.445.079.93.118 1.436.118Zm4-2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52 0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984 0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25 4 .75 5.79 0 8 0s4 .75 4 2.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Pin