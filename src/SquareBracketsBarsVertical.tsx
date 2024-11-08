import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareBracketsBarsVertical = ( props: SvgProps ) => (
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
            d="M2.5 4.25a.75.75 0 0 1 .75-.75h1.01a.75.75 0 0 0 0-1.5H3.25A2.25 2.25 0 0 0 1 4.25v7.5A2.25 2.25 0 0 0 3.25 14h1.01a.75.75 0 0 0 0-1.5H3.25a.75.75 0 0 1-.75-.75v-7.5ZM11.74 2a.75.75 0 0 0 0 1.5h1.01a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.01a.75.75 0 0 0 0 1.5h1.01A2.25 2.25 0 0 0 15 11.75v-7.5A2.25 2.25 0 0 0 12.75 2h-1.01ZM8.75 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Zm2-.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75ZM6 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareBracketsBarsVertical
