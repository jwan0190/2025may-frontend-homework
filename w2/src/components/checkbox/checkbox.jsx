export default function CheckBox({id,className,label}){
    return(
        <div class={className}>
            <input type="checkbox" id={id} name={className}/>
            <label for={className}>{label}</label>
        </div>
    )
}