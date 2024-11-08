import { Svg, Path, SvgProps } from "@aarock/ui-core"
const SquareListUl = ( props: SvgProps ) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3Zm-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm4.75.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 0A.75.75 0 0 1 8 4.5h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM5.25 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 1.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 7.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5H8Zm-.75 3.5A.75.75 0 0 1 8 10h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SquareListUl
