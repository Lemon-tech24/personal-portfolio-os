import Draggable from "react-draggable"
import '../styles/index.css'

export default function Calculator(props){

    const handleClick = ()=>{
        props.setActive(!props.Active)
    }

    const btnValues = ['C', 'Delete','÷','x','1','2','3','+','4','5','6','-','7','8', '9', '.', '=']
    return(
        <>
            <Draggable>
                <div className="calculator" style={{display: props.Active ?'none': 'block'}}>
                    <div className="title">
                        <span></span>
                        <p>Calculator</p>
                        <div onClick={handleClick}>X</div>
                    </div>

                    <form>
                        <input type="text" pattern="[0-9]" disabled/>
                    </form>

                    <div className="btns">
                        {btnValues.map((items, key)=>{
                            return(<>

                                <button key={key}>{items}</button>

                            </>)
                        })}
                    </div>
                </div>
            </Draggable>
        </>
    )
}