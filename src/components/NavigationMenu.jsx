export default function NavigationMenu(props){
    const handleClick = () =>{
        props.setActiveCalculator(!props.ActiveCalculator)
    }

    return(
    <>
        <div className="navigation-box">

            <div className="nav-btns">
                <button onClick={handleClick}>Calculator</button>
                <button>Todo</button>
                <button>Weather</button>
            </div>

            <div>
                <button>Menu</button>
            </div>
        </div>
    </>
    )
}