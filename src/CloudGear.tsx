import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const CloudGear = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <G clipPath="url(#a)">
            <Path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811.75.75 0 0 0 .702.563 2.986 2.986 0 0 1 1.94.798c.591.549.96 1.33.96 2.2A.75.75 0 0 0 16 8a4.49 4.49 0 0 0-1.44-3.3 4.489 4.489 0 0 0-2.373-1.148 4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3.289 3.289 0 0 1 4.5 5.25Zm8.509 5.939a2.223 2.223 0 0 1-1.66-2.138l-.68-.256a2.38 2.38 0 0 1-2.748.816l-.406.569c.57.788.57 1.87 0 2.657l.406.569a2.38 2.38 0 0 1 2.747.816l.68-.255a2.223 2.223 0 0 1 1.66-2.139v-.639Zm-.113-2.396a.715.715 0 0 0-.418-.921l-1.798-.674a.865.865 0 0 0-1.114.506.87.87 0 0 1-1.32.395.884.884 0 0 0-1.23.2L5.94 9.805a.771.771 0 0 0 .18 1.076c.43.307.43.948 0 1.255a.771.771 0 0 0-.18 1.076l1.076 1.506a.884.884 0 0 0 1.23.2.87.87 0 0 1 1.32.395.865.865 0 0 0 1.114.506l1.798-.674a.715.715 0 0 0 .418-.92.715.715 0 0 1 .67-.966h.134a.808.808 0 0 0 .809-.809v-1.883a.808.808 0 0 0-.809-.808h-.134a.715.715 0 0 1-.67-.966Zm-1.833 2.709a1.052 1.052 0 1 1-2.103 0 1.052 1.052 0 0 1 2.103 0Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <clipPath id="a">
                <Path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </Defs>
    </Svg>
)
export default CloudGear
