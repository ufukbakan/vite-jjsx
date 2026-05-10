interface Props extends JSX.ComponentProps {
    style?: string
    id?: string
}

export default function Container({ children, style, id }: Props) {
    return (
        <div class="container" style={style} id={id}>
            {children}
        </div>
    );
}