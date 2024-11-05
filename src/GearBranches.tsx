import { Svg, Path, SvgProps, G, Defs } from "@aarock/ui-core"
const GearBranches = ( props: SvgProps ) => (
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
                d="M7.295 2a.25.25 0 0 0-.243.194l-.131.568a2.35 2.35 0 0 1-3.263 1.611l-.122-.055a.25.25 0 0 0-.323.107l-.696 1.277A.25.25 0 0 0 2.559 6l.971.97a.75.75 0 1 1-1.06 1.06l-.971-.97a1.75 1.75 0 0 1-.3-2.076l.697-1.277a1.75 1.75 0 0 1 2.26-.755l.123.056a.85.85 0 0 0 1.18-.583l.131-.568A1.75 1.75 0 0 1 7.295.5h1.41a1.75 1.75 0 0 1 1.705 1.357l.13.568a.85.85 0 0 0 1.18.583l.123-.056a1.75 1.75 0 0 1 2.26.755l.697 1.277a1.75 1.75 0 0 1-.299 2.075l-.97.971a.75.75 0 0 1-1.061-1.06l.97-.971a.25.25 0 0 0 .043-.297l-.696-1.277a.25.25 0 0 0-.323-.107l-.123.055a2.35 2.35 0 0 1-3.262-1.61l-.131-.57A.25.25 0 0 0 8.704 2H7.295ZM3.25 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 1.5a2.25 2.25 0 0 0 1.978-3.322l.553-.442a1.25 1.25 0 0 0 .469-.976V7.75a.75.75 0 1 0-1.5 0v.89l-.655.524A2.25 2.25 0 1 0 3.25 13.5Zm5.5-.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.5 0a2.25 2.25 0 1 1-3-2.122V7.754a.75.75 0 0 1 1.5 0v3.374a2.25 2.25 0 0 1 1.5 2.122Zm2.5-1.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 1.5a2.25 2.25 0 1 0-.795-4.356L11.5 8.69v-.94a.75.75 0 1 0-1.5 0v1.043c0 .331.132.65.366.884l.44.44A2.25 2.25 0 0 0 12.75 13.5Z"
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
export default GearBranches