type Props = {
  name: string
  onClick?: () => void
}

export function Button({name, ...rest}: Props) {
    return (
        <button {...rest}>{name}</button>
    )
}