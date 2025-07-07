import './input.css'
export default function Input({type, label,placeholder,link,linkText,imgUrl,imgAlt,onChange}){
    return(
    <div class="password-input">
        <div id="password-label">
            <label for={type} class="input-label">{label}</label>
            {linkText&&(<a rel="stylesheet" href="">{linkText}</a>)}
            

        </div>
        <div class="input-container" >
            <input name={label}  type={type} placeholder={placeholder} onChange={onChange}/>
            {imgUrl&&(<img id="visible-icon" src={imgUrl} alt={imgAlt}/>)}
        </div>
   
    </div>

)
}