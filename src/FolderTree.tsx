import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FolderTree = ( props: SvgProps ) => (
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
            d="M7.5 13.5v-3A.5.5 0 0 1 8 10h.672a.5.5 0 0 1 .353.146l.414.415.44.439H13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5ZM6 13H4.5a3 3 0 0 1-3-3V1.25a.75.75 0 0 1 1.5 0V2a1.5 1.5 0 0 0 1.5 1.5H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5H4.5A2.986 2.986 0 0 1 3 4.599V10a1.5 1.5 0 0 0 1.5 1.5H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V13Zm1.5-8.75V5.5A.5.5 0 0 0 8 6h5a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 3H9.879l-.44-.44-.414-.414A.5.5 0 0 0 8.672 2H8a.5.5 0 0 0-.5.5v1.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FolderTree
