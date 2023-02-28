import './Header.css'

export default function Header({items}) {
    return(
        <header>
            <h1>Logotipo</h1>
            <div className="navbar"> 
            {items.map((item) => 
                <a 
                key={item.id}
                href={item.link} className="navbar_item">   {item.item}</a>
            )}
            </div>
        </header>
    )
}