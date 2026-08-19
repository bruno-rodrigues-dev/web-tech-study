const Banner = (props) => {
    console.log(props.children)


    /* O children permite que você passe e renderize
     conteúdo dinâmico dentro de um componente em React */
    return (
        <>
            {props.children}
        </>
    )
}

export default Banner