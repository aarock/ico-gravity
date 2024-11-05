import { Svg, Path, SvgProps } from "@aarock/ui-core"
const Comments = ( props: SvgProps ) => (
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
            d="M10 9.5h.621l.44.44 1.51 1.51a.174.174 0 0 0 .295-.136l-.112-1.454-.062-.809.642-.495C14.037 8.016 14.5 7.211 14.5 6c0-1.214-.465-2.019-1.17-2.56-.754-.578-1.902-.94-3.33-.94-1.428 0-2.576.362-3.33.94C5.966 3.98 5.5 4.786 5.5 6s.465 2.019 1.17 2.56c.754.578 1.902.94 3.33.94Zm.52 2.02.99.99a1.673 1.673 0 0 0 2.851-1.312l-.111-1.453C15.33 8.91 16 7.663 16 6c0-3.333-2.686-5-6-5-2.127 0-3.995.687-5.06 2.06C2.131 3.384 0 5.03 0 8c0 1.663.669 2.911 1.75 3.745l-.111 1.453A1.673 1.673 0 0 0 4.49 14.51L6 13c1.803 0 3.42-.493 4.52-1.48ZM4.143 4.736C4.05 5.126 4 5.548 4 6c0 2.905 2.04 4.544 4.759 4.918-.717.366-1.654.582-2.759.582h-.621l-.44.44-1.51 1.51a.174.174 0 0 1-.295-.136l.112-1.454.062-.809-.642-.495C1.963 10.016 1.5 9.211 1.5 8c0-1.214.465-2.019 1.17-2.56.391-.3.887-.541 1.473-.704Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Comments
