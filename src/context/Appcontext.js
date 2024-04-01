import { createContext, useState } from 'react';
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchData(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
        console.log(url);
        try {
            const output = await fetch(url);
            if (!output.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await output.json();
            setPage(data.page);
            setTotalPage(data.totalPages);
            setPosts(data.posts);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }
    
    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchData,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
