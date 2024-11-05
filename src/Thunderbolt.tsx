import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Thunderbolt = ( props: SvgProps ) => (
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
            d="m7.835 6 .76-2.027L9.336 2H5.5a.716.716 0 0 0-.664.45L2.513 8.257a.177.177 0 0 0 .164.243h4.965l-.732 2.013-1.082 2.975a.382.382 0 0 0 .637.392l6.956-7.391A.29.29 0 0 0 13.21 6H7.835Zm1.558-4.154ZM10.563 3l.235-.627A1.386 1.386 0 0 0 9.5.5h-4c-.906 0-1.72.552-2.057 1.393L1.12 7.7A1.677 1.677 0 0 0 2.677 10H5.5l-.545 1.5-.537 1.475a1.882 1.882 0 0 0 3.14 1.933l6.956-7.391A1.79 1.79 0 0 0 13.21 4.5H10l.563-1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Thunderbolt
