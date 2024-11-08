import { Svg, Path, SvgProps } from "@aarock/ui-core"
const BucketPaint = ( props: SvgProps ) => (
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
            d="M11.773 7.412c-.064.064-.27.249-1.017-.027-.75-.277-1.706-.928-2.695-1.918-.99-.99-1.64-1.945-1.918-2.695-.276-.747-.091-.953-.027-1.017.064-.064.27-.249 1.017.027.094.035.19.075.29.121.7.324 1.54.93 2.405 1.797.99.99 1.641 1.945 1.918 2.695.276.747.091.953.027 1.017ZM7 6.528c.85.85 1.738 1.535 2.581 1.972H1.694v-.027a1.292 1.292 0 0 1 .1-.507l2.802-4.33c.056-.087.114-.174.172-.26C5.16 4.383 5.956 5.485 7 6.529Zm3.89-3.889c2.147 2.148 3.24 4.537 1.944 5.834a12.976 12.976 0 0 1-2.127 1.719L6.352 13.01s-1.945 1.296-4.537-1.296C-.778 9.12.518 7.175.518 7.175L3.336 2.82A12.98 12.98 0 0 1 5.056.694C6.351-.602 8.74.491 10.888 2.64Zm1.86 12.36c.966 0 1.75-.765 1.75-1.71 0-1.234-1.17-2.76-1.512-3.178a.304.304 0 0 0-.237-.111.31.31 0 0 0-.24.112c-.34.422-1.511 1.96-1.511 3.178 0 .944.784 1.71 1.75 1.71Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BucketPaint
