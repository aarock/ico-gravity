import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Cloud = ( props: SvgProps ) => (
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
            d="M4.5 6.25a3.25 3.25 0 0 1 6.051-1.65 4.497 4.497 0 0 0-2.35 1.34A.75.75 0 0 0 9.3 6.96a2.99 2.99 0 0 1 2.3-.958A3 3 0 0 1 11.5 12H3.75a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3.289 3.289 0 0 1 4.5 6.25ZM7.75 1.5a4.75 4.75 0 0 0-4.747 4.574A3.751 3.751 0 0 0 3.75 13.5h7.75a4.5 4.5 0 0 0 .687-8.948A4.751 4.751 0 0 0 7.75 1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Cloud
