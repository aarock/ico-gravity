import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Percent = ( props: SvgProps ) => (
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
            d="M4.5 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 10a3 3 0 1 1 0-6 3 3 0 1 1 0 6Zm1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm.78-8.22a.75.75 0 0 0-1.06-1.06l-10.5 10.5a.75.75 0 1 0 1.06 1.06l10.5-10.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Percent
