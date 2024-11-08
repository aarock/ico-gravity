import { Svg, Path, SvgProps } from "@aarock/ui-core"
const LayoutTabs = ( props: SvgProps ) => (
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
            d="M3.999 3.5h.242c.559 0 1.049.37 1.202.907l.171.598A2.75 2.75 0 0 0 8.26 7h5.24v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V5a1.5 1.5 0 0 1 1.499-1.5Zm9.501 2h-1.242a1.25 1.25 0 0 1-1.201-.907l-.171-.598a2.758 2.758 0 0 0-.195-.495H12A1.5 1.5 0 0 1 13.5 5v.5ZM8.241 2H4a3.057 3.057 0 0 0-.457.035A2.99 2.99 0 0 0 2 2.764 2.99 2.99 0 0 0 1 5v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H8.241ZM7 3.5h1.242c.559 0 1.049.37 1.202.907l.171.598c.05.174.115.339.195.495H8.26a1.25 1.25 0 0 1-1.202-.907l-.171-.598A2.753 2.753 0 0 0 6.69 3.5H7Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default LayoutTabs
