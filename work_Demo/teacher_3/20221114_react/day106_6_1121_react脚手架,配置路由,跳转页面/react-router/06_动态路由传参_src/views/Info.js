import { useSearchParams } from 'react-router-dom'
export default function Info() {
    // useSearchParams类似于useState
    let [search, setSearch] = useSearchParams();
    console.log(search);
    // 解构动态属性
    let id = search.get("id");
    let title = search.get("title")
    return (
        <div>
            新闻详情--{title}--{id}
            <button onClick={() => {
                id++;
                console.log(id);
                setSearch(`id=${id}&title=小明过马路`)
            }}>下一个新闻</button>
        </div>
    )
}