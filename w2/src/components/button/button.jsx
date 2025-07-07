import './button.css'

export default function Button({type,children}){
    return(
        <>
            <button class="primamry-button" type={type}>{children}</button>
        </>
    )

}