import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const Molecule = ( props: SvgProps ) => (
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
                d="M4.706 3.39a1 1 0 1 1 .108-.064.76.76 0 0 0-.108.064Zm.108 1.546a2.5 2.5 0 1 1 1.292-.762l.849 1.485a3.497 3.497 0 0 1 3.191.576l2.222-1.851a1.75 1.75 0 1 1 1.101 1.035l-2.362 1.968c.251.483.393 1.031.393 1.613 0 .557-.13 1.083-.361 1.55l.958.767a2.25 2.25 0 1 1-.959 1.154l-.937-.75a3.501 3.501 0 0 1-5.62-1.971H3.33a1.75 1.75 0 1 1 0-1.5h1.25a3.497 3.497 0 0 1 1.072-1.846l-.84-1.468ZM10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3.25 5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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
export default Molecule
