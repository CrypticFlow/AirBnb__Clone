import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core"; 
import SearchResult from "./SearchResult"; 

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage__info">
                <p> 62 stays - 26 August to 30 August - 2 Guest </p>
                <h1> Stays nearby </h1> 
                <Button 
                variant="outlined"> 
                Cancellation Flexability
                 </Button>
                 <Button 
                variant="outlined"> 
                Type of Place
                 </Button>
                 <Button 
                variant="outlined"> 
                Price
                 </Button>
                 <Button 
                variant="outlined"> 
                Rooms and Beds
                 </Button>
                 <Button 
                variant="outlined"> 
                More Filters
                 </Button>
            </div> 

            <div className="searchResults"> 
                <SearchResult 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                    location="Private Room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
                    star={4.73}
                    price="$30 / night"
                    total="$117 total"
                /> 

                <SearchResult 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                    location="Private Room in the center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
                    star={4.73}
                    price="$30 / night"
                    total="$117 total"
                /> 
            </div> 
           
        </div>
    )
}

export default SearchPage
