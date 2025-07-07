import './layout.css'
export default function Layout({children}){
    return(<>
        <div class="container">
            <div id="div-1">
                {children[0]}
            </div>
            <div id="div-2">
                {children[1]}
            </div>
    </div>
    </>)
}