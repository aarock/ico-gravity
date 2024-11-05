import { Svg, Path, SvgProps } from "@aarock/ui-core"
const TagDollar = ( props: SvgProps ) => (
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
            d="m7.182 2.94-4.87 4.869a1 1 0 0 0-.006 1.408l4.37 4.45a1 1 0 0 0 1.414.012l4.96-4.868a1.5 1.5 0 0 0 .45-1.07V3.5a1 1 0 0 0-1-1H8.243a1.5 1.5 0 0 0-1.061.44Zm6.92 6.942A3 3 0 0 0 15 7.741V3.5A2.5 2.5 0 0 0 12.5 1H8.243a3 3 0 0 0-2.122.879l-4.87 4.87a2.5 2.5 0 0 0-.015 3.519l4.37 4.45a2.5 2.5 0 0 0 3.535.032l4.96-4.868Zm-3.72-5.324a2.477 2.477 0 0 0-1.045-.38 1.95 1.95 0 0 0-1.616.57c-.54.54-.56 1.23-.437 1.767.119.526.394 1.029.637 1.41.254.4.46.732.549 1.033.073.249.036.352-.072.46-.072.072-.182.124-.417.066-.253-.064-.569-.247-.855-.533a1.773 1.773 0 0 1-.469-.879c-.069-.329-.023-.57.034-.68a.75.75 0 1 0-1.33-.693c-.263.506-.289 1.125-.172 1.682.07.332.196.67.382.988l-.253.252a.75.75 0 0 0 1.06 1.061l.222-.221a3.12 3.12 0 0 0 1.018.478c.6.15 1.301.079 1.84-.46.612-.612.626-1.346.451-1.943-.153-.522-.472-1.022-.694-1.37l-.029-.046c-.213-.334-.378-.664-.44-.937-.06-.261-.002-.337.036-.374a.451.451 0 0 1 .392-.14c.172.02.445.126.777.457.33.33.447.6.482.79a.832.832 0 0 1-.067.513.75.75 0 1 0 1.362.627c.18-.392.281-.879.179-1.42a2.712 2.712 0 0 0-.446-1.036l.221-.221a.75.75 0 1 0-1.06-1.06l-.24.239Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default TagDollar
