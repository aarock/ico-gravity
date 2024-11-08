import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const Shapes4 = ( props: SvgProps ) => (
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
                d="M6.193 6 4 2.075 1.807 6h4.386ZM5.091.953a1.25 1.25 0 0 0-2.182 0L.289 5.64A1.25 1.25 0 0 0 1.38 7.5h5.24a1.25 1.25 0 0 0 1.09-1.86L5.092.953ZM2.534 14.929a3.5 3.5 0 1 0 2.932-6.36 3.5 3.5 0 0 0-2.932 6.36ZM4 13.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15.28 1.22a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0Zm-5.03 12.03v-3.5h3.5v3.5h-3.5ZM8.75 9.5c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25v-4Z"
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
export default Shapes4
