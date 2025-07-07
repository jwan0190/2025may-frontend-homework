import './card.css'
export default function Card({children}){
    return(<>
        <div class="card">
              {children}
        </div>
    </>)
}