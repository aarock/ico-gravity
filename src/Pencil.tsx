import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Pencil = ( props: SvgProps ) => (
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
            d="M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529-1.971 1.971-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059 2.5-2.5c.191-.191.451-.299.722-.299Zm-2.31 4.009-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903 1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.077 2.077 0 0 0-1.88-1.88Zm3.098.658a3.59 3.59 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88l-1.28 1.28Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Pencil
