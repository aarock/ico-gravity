import { Svg, Path, SvgProps } from "@aarock/ui-core"
const FileDollar = ( props: SvgProps ) => (
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
            d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5Zm2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879L13.12 5.12Zm-6.878.388c.272-.203.596-.343.955-.423V4.75a.75.75 0 0 1 1.5 0v.311c.537.097.973.309 1.309.616a.75.75 0 1 1-1.014 1.106c-.134-.123-.412-.28-.993-.28-.464 0-.728.11-.857.206-.112.084-.147.172-.147.274 0 .014 0 .022.016.043a.628.628 0 0 0 .189.152c.23.135.573.242.952.32l.05.011c.394.081.956.197 1.42.434.523.267 1.057.763 1.057 1.609 0 .75-.468 1.263-.98 1.55-.302.17-.648.28-1.002.342v.306a.75.75 0 0 1-1.5 0v-.349a3.347 3.347 0 0 1-.915-.383c-.463-.281-.887-.704-1.064-1.226a.75.75 0 1 1 1.421-.48c.027.08.147.257.423.425.262.16.595.265.937.265.4 0 .748-.086.966-.209.208-.116.214-.204.214-.241 0-.08-.008-.155-.239-.273-.269-.137-.643-.218-1.093-.312-.428-.089-.963-.235-1.408-.496-.446-.263-.944-.735-.944-1.488 0-.587.268-1.115.747-1.474Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FileDollar
