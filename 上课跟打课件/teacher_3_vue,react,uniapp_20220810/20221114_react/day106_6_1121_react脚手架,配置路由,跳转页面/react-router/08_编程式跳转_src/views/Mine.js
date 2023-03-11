import { useParams } from 'react-router-dom'
function Mine() {
    let params = useParams();
    let { id } = params
    return (
        <div>我的页面--{id}</div>
    );
}

export default Mine;