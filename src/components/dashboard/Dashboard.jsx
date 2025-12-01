import React, {useState, useEffect} from 'react';
import Navbar from "../navbar"
import "./Dashboard.css";


const Dashboard = () => {
    const [repositories, setRepositories] = useState([]);
    const [suggestedRepositories, setSuggestedRepositories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId")

        try{

            const userRepositories = async () => {
            const userRepos = await fetch(`http://localhost:3002/repo/user/${userId}`)
            const response = await userRepos.json()
            console.log(response)
            console.log("These are user repos");
            setRepositories(response)     
        }
        const fetchSuggestedRepositories = async () => {
                const suggestedRepositories = await fetch(`http://localhost:3002/repo/all`)
                const response = await suggestedRepositories.json();
                console.log(response);
                console.log("These are suggested repos");
                setSuggestedRepositories(response)
            }
            userRepositories();
            fetchSuggestedRepositories();

    } catch(err) {
        console.error(err);
    }
    },[]);

    useEffect(() => {
        if (searchQuery == "") {
            setSearchResults(repositories)
        } else {
            const filteredSearch = repositories.filter((repo) => 
                repo.reponame.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setSearchResults(filteredSearch)
            console.log(filteredSearch, filteredSearch)
        }
    },[searchQuery, repositories])

    return (
        <>
        <Navbar/>
        <div className='dashboard'>
        <aside className='suggested-section' >
        <h3>Suggested repositories</h3>
        {suggestedRepositories.map((repo) => {
            return(
            <div key={repo._id}>
                <h4>{repo.reponame}</h4>
                <p>{repo.description}</p>
            </div>
            )
        })

        }
        </aside>
        <main className='main-section'>
            <h3>Your Repositories</h3>
            <div className="searchBox">
                <input type="text" value={searchQuery} placeholder='Search Repositories' onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            {searchResults.map((repo) => {
                return(
                <div key={repo._id}>
                    <h4>{repo.reponame}</h4>
                    <p>{repo.description}</p>
                </div>
                )
            })}
        </main>
        <aside className='upcoming-events-section'>
            <h3>Upcoming Events</h3>
            <h5>Developer Conference - 25th Dec 2025</h5>
            <h5>React Summit - 20th Jan 2026</h5>
            <h5>Github Meeting : Version launch - 1st Dec 2025</h5>
        </aside>
        </div>
        </>
    )
}

export default Dashboard;