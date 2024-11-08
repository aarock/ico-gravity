import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TvRetro = ( props: SvgProps ) => (
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
            d="M6.086.782a.75.75 0 0 0-1.172.937L5.94 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 2.79 2.993l-.21.421a.75.75 0 0 0 1.34.671l.5-1A.762.762 0 0 0 5.458 14h5.086c.01.029.022.057.036.085l.5 1a.75.75 0 0 0 1.342-.67l-.211-.422A3 3 0 0 0 15 11V6a3 3 0 0 0-3-3h-1.94l1.026-1.281A.75.75 0 0 0 9.914.782L8.14 3h-.28L6.086.782ZM7.494 4.5H12A1.5 1.5 0 0 1 13.5 6v5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V6A1.5 1.5 0 0 1 4 4.5h3.494ZM5.5 7.5v2H8v-2H5.5ZM5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm7 .75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TvRetro
