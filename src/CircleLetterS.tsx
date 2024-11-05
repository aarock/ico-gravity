import { Svg, Path, SvgProps } from "@aarock/ui-core"
const CircleLetterS = ( props: SvgProps ) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8.054 4.502c-.708 0-1.34.18-1.811.558a1.95 1.95 0 0 0-.74 1.545c0 .764.474 1.265.94 1.559.457.287 1.007.448 1.448.547.462.102.844.191 1.119.341.227.125.274.224.274.376 0 .102-.04.217-.248.341-.224.135-.577.229-.982.229-.344 0-.682-.114-.952-.29-.282-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.17.543.59 1 1.067 1.31a3.273 3.273 0 0 0 1.772.534c.602 0 1.24-.134 1.754-.443.53-.319.976-.864.976-1.627 0-.864-.51-1.394-1.055-1.692-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227.47 0 .742.11.9.218a.832.832 0 0 1 .316.41.75.75 0 0 0 1.407-.52A2.33 2.33 0 0 0 9.8 4.98c-.455-.31-1.037-.478-1.745-.478Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CircleLetterS
