import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BranchesRightArrowRight = ( props: SvgProps ) => (
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
            d="M12 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM12.75.5A2.25 2.25 0 0 0 10.628 2h-.378a3 3 0 0 0-3 3v2.19L5.03 4.97a.75.75 0 0 0-1.06 1.06l1.22 1.22H1.75a.75.75 0 0 0 0 1.5h3.44L3.97 9.97a.75.75 0 1 0 1.06 1.06l2.22-2.22V11a3 3 0 0 0 3 3h.378a2.251 2.251 0 1 0 0-1.5h-.378a1.5 1.5 0 0 1-1.5-1.5V8.75h1.878a2.251 2.251 0 1 0 0-1.5H8.75V5a1.5 1.5 0 0 1 1.5-1.5h.378a2.251 2.251 0 1 0 2.122-3ZM12 13.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75-4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BranchesRightArrowRight
