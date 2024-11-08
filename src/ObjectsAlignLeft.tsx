import { Svg, Path, SvgProps } from "@aarock/ui-core"
const ObjectsAlignLeft = ( props: SvgProps ) => (
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
            d="M2 1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0V1.75ZM6.5 5.5V4a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5ZM5 4a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm1.5 8v-1.5A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5ZM5 10.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.5Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default ObjectsAlignLeft
