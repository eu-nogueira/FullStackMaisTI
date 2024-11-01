import { userState, useEffect } from 'react'

function UserList() {
    const [user, setUsers] = userState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typecode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Erro ao buscar dados", error))
    }, [])

    return(
        <ul>
            {userState.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList
