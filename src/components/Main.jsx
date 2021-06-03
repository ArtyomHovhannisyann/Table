import React, { useEffect,useState } from 'react'
import { request } from '../provaiders/request'
import Header from './Header'
import Table from './Table'

export default function Main() {
    const [ usersData, setUsersData] = useState([])
    useEffect(() => {
        GET_DATA()
    }, [])
    async function GET_DATA() {
        try{
            const data = await request("https://jsonplaceholder.typicode.com/users","GET")
            setUsersData(data)
        }
        catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <Header data = {usersData}/>
            <Table data = {usersData}/>
        </div>
    )
}
