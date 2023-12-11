import { useState } from "react"
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar"
import searchImages from "./api"

export default function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async(term) => {
        const searchedImages = await searchImages(term);
        setImages(searchedImages)
    }

    return(
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
} 