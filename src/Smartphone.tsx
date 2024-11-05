import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Smartphone = ( props: SvgProps ) => (
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
            d="M12 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5v-9A1.5 1.5 0 0 1 5.5 2h5A1.5 1.5 0 0 1 12 3.5Zm-1.5-3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h5ZM6.25 11a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Smartphone
