'use client'
import { useState } from "react"
import ItemCardList from "../components/itemCardList"
import SearchBar from "../components/searchBar"
import SearchBar2 from "../components/searchBar2"
import SocietiesList from "../components/societiesList";


export default function Societies() {

    
    const [ searchTerm, setSearchTerm ] = useState('');

    const sampleItems = [
        { id: '1', title: 'Item 1', description: 'This is the first item' },
        { id: '2', title: 'Item 2', description: 'This is the second item' },
        { id: '3', title: 'Item 3', description: 'This is the third item' },
        { id: '4', title: 'Item 4', description: 'This is the fourth item' },
        { id: '5', title: 'Item 5', description: 'This is the fifth item' },
        { id: '6', title: 'Item 6', description: 'This is the sixth item' },
      ]

    return (
        <>
          <SearchBar2 searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <SocietiesList />
        </>
    )
}