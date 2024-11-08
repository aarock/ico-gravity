import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const SealPercent = ( props: SvgProps ) => (
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
                d="M5.515 3.5h.621l.44-.44 1.07-1.07a.5.5 0 0 1 .708 0l1.07 1.07.44.44H12a.5.5 0 0 1 .5.5v2.136l.44.44 1.07 1.07a.5.5 0 0 1 0 .708l-1.07 1.07-.44.44V12a.5.5 0 0 1-.5.5H9.864l-.44.44-1.07 1.07a.5.5 0 0 1-.708 0l-1.07-1.07-.44-.44H4a.5.5 0 0 1-.5-.5V9.864l-.44-.44-1.07-1.07a.5.5 0 0 1 0-.708l1.07-1.07.44-.44V4a.5.5 0 0 1 .5-.5h1.515Zm3.9-2.571a2 2 0 0 0-2.83 0L5.516 2H4a2 2 0 0 0-2 2v1.515L.929 6.585a2 2 0 0 0 0 2.83L2 10.484V12a2 2 0 0 0 2 2h1.515l1.07 1.071a2 2 0 0 0 2.83 0L10.484 14H12a2 2 0 0 0 2-2v-1.515l1.071-1.07a2 2 0 0 0 0-2.83L14 5.516V4a2 2 0 0 0-2-2h-1.515L9.415.929ZM6.53 10.53l4-4a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06ZM11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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
export default SealPercent
