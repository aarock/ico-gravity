import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LogoOsi = ( props: SvgProps ) => (
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
            d="M8 2.5a5.5 5.5 0 0 0-2.977 10.126l.79-2.571a3 3 0 1 1 4.372 0l.792 2.57A5.5 5.5 0 0 0 8 2.5ZM1 8a7 7 0 1 1 9.832 6.403.75.75 0 0 1-1.02-.465l-1.2-3.901a.75.75 0 0 1 .273-.826 1.5 1.5 0 1 0-1.77 0 .75.75 0 0 1 .274.826l-1.2 3.901a.75.75 0 0 1-1.021.465A7.001 7.001 0 0 1 1 8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LogoOsi
