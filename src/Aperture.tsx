import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Aperture = ( props: SvgProps ) => (
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
            d="M13.5 8a5.48 5.48 0 0 1-.48 2.251 6.965 6.965 0 0 0-.897-2.61c-.64-1.109-1.517-1.984-2.467-2.508l-.013-.008a5.037 5.037 0 0 0-.19-.098c-.634-.314-1.33-.484-2.006-.428.464-.575.995-1.002 1.514-1.259.733-.362 1.356-.353 1.789-.103v-.001A5.498 5.498 0 0 1 13.5 8ZM7.438 2.528A5.5 5.5 0 0 0 2.5 8c0 .5.304 1.044.984 1.497.482.322 1.117.568 1.847.682-.386-.558-.587-1.245-.633-1.951a5.047 5.047 0 0 1-.009-.213v-.012c-.022-1.086.298-2.284.938-3.394a6.966 6.966 0 0 1 1.811-2.08ZM6.189 8.002c.002.043.003.087.006.13.053.815.372 1.35.805 1.6.433.25 1.056.259 1.789-.104l.117-.06.11-.07C9.696 9.043 10 8.5 10 8s-.304-1.044-.984-1.497a3.492 3.492 0 0 0-.11-.071 3.511 3.511 0 0 0-.117-.06C8.056 6.009 7.433 6.018 7 6.268c-.433.25-.752.785-.805 1.6a3.51 3.51 0 0 0-.006.134Zm3.468 2.865.011-.007a4.22 4.22 0 0 0 .18-.115c.59-.392 1.084-.91 1.374-1.523.266.69.37 1.362.333 1.94-.053.816-.372 1.351-.805 1.601A5.474 5.474 0 0 1 8 13.5a5.493 5.493 0 0 1-4.458-2.278c.8.34 1.73.528 2.708.528 1.28 0 2.477-.322 3.407-.883ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Aperture
