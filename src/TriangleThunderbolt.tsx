import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TriangleThunderbolt = ( props: SvgProps ) => (
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
            d="M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0Zm3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505ZM8.671 6.585a.75.75 0 0 0-1.342-.67l-1.25 2.5a.75.75 0 0 0 .67 1.085h1.287l-.707 1.415a.75.75 0 1 0 1.342.67l1.25-2.5A.75.75 0 0 0 9.25 8H7.963l.708-1.415Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TriangleThunderbolt
