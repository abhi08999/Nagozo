import React from 'react'

// Components
import Navbar from "../Components/Navbar/navbar"
import SearchBar from "../Components/Searchbar/searchbar"
import Chips from "../Components/Streams Chips/chips"
import CardCarousal from "../Components/Cards Carousal/card_carousal"
import UserNovels from "../Components/Novels/foryournovels"
import FeaturedNovels from "../Components/Novels/feature_novels"
import LatestNovels from "../Components/Novels/latestnovel"
const Home=()=> {
    return (
        <div>
            <Navbar/>
            <SearchBar/>
            <CardCarousal/>
            <Chips/>
            <UserNovels/>
           <FeaturedNovels/> 
           <LatestNovels/> 

        </div>
    )
}

export default Home
