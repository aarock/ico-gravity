import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Vault = ( props: SvgProps ) => (
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
            d="M4.5 14.25v-.75h7v.75a.75.75 0 0 0 1.5 0v-.791a3 3 0 0 0 2.5-2.959v-6a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6A3 3 0 0 0 3 13.459v.791a.75.75 0 0 0 1.5 0ZM3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v6A1.5 1.5 0 0 0 3.5 12ZM8 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.384-.246a2.498 2.498 0 0 0-.402-2.278l.66-.942a.75.75 0 0 0-1.229-.86l-.66.942a2.499 2.499 0 0 0-2.277.402l-.942-.66a.75.75 0 0 0-.86 1.228l.942.66a2.499 2.499 0 0 0 .402 2.277l-.66.943a.75.75 0 0 0 1.228.86l.66-.942a2.499 2.499 0 0 0 2.277-.402l.943.66a.75.75 0 1 0 .86-1.228l-.942-.66Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Vault
