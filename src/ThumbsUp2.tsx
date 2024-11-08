import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const ThumbsUp2 = ( props: SvgProps ) => (
    <Svg

        width={ 16 }
        height={ 16 }
        fill="none"
        viewBox="0 0 16 16"
        { ...props }
    >
        <G clipPath="url(#a)">
            <Path
                fill="currentColor"
                fillRule="evenodd"
                d="m13.345 2.978-.135.609-.33 1.5h1.158A2 2 0 0 1 16 7.472l-.259 1.321a4 4 0 0 1-4.322 3.21 4 4 0 0 1-4.286 2.767l-3.984-.473-.48-6.352 2.813-4.564a1.854 1.854 0 0 1 3.427.826l1.452-2.418a1.627 1.627 0 0 1 2.984 1.189Zm-4.38 4.06.215-.37 2.467-4.106a.127.127 0 0 1 .233.092l-.465 2.11-.403 1.823h3.027a.5.5 0 0 1 .49.596l-.26 1.321a2.5 2.5 0 0 1-2.528 2.018l.219-1.09A2 2 0 0 0 10 7.037H8.964ZM4.55 12.952l2.759.328a2.5 2.5 0 0 0 2.745-1.99l.434-2.155a.5.5 0 0 0-.49-.599H6.476l.414-1.83.515-2.275a.354.354 0 0 0-.646-.264L4.2 8.318l.35 4.635ZM.695 7.651a.75.75 0 0 1 .804.691l.478 6.353a.75.75 0 0 1-1.495.112L.004 8.455a.75.75 0 0 1 .691-.804Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <clipPath id="a">
                <Path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </Defs>
    </Svg>
)
export default ThumbsUp2
