import { data } from './student'

function MapDemo() {
    return <>
        <h1>MapDemo</h1>
        <ul>
            {data.map((v, i) => {
                return <li key={v.id}>{v.name}</li>
            })}
        </ul>
    </>
}

export default MapDemo