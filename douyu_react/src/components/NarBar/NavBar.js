import { useContext } from 'react'
import "./NarBar.css";
import gloabContext from '../../utils/context'
import user_white from '../.././static/user_white.png'
import bars_white from '../.././static/bars_white.png'
export default function Info(props) {
    // console.log(props);
    let context = useContext(gloabContext)
    return (
        <div className="header">
            <div className="left">
                <i onClick={() => {
                    console.log(context)
                    context.fun(!context.isShow)
                }}><img src={bars_white} /></i>{props.children}</div>
            <div className="right"><i><img src={user_white} /></i>111</div>
        </div>
    )
}