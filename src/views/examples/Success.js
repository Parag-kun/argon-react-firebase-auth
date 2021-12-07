import { useHistory } from "react-router-dom"

const Success = () => {
    const history = useHistory()
    setTimeout(() => history.push('/'), 2000)
    return (
        <div style={{ color: 'white', zIndex: 1, fontWeight: 'bolder', fontSize: 50 }}>
            Success!            
        </div>
    )
}

export default Success