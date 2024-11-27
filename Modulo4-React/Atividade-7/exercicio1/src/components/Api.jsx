import React, { useState, useEffect } from 'react';

function ListaDePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Erro ao buscar os posts');
            }
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Lista de Posts</h1>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={fetchPosts} style={{ marginBottom: '20px', padding: '10px 20px' }}>
                Recarregar Dados
            </button>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ margin: '10px 0', border: '1px solid #ddd', padding: '10px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDePosts;
