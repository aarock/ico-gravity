import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const LogoFacebook = ( props: SvgProps ) => (
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
            d="M8.5 13.478a5.5 5.5 0 1 0-1.5-.069V9.75H5.75a.75.75 0 1 1 0-1.5H7V7.24c0-.884.262-1.568.722-2.032.46-.464 1.121-.708 1.922-.708.273 0 .612.04.948.213a.75.75 0 0 1-.685 1.334A.57.57 0 0 0 9.644 6c-.493 0-.737.144-.857.265-.12.12-.287.39-.287.975v1.01h1.25a.75.75 0 0 1 0 1.5H8.5v3.728ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LogoFacebook
