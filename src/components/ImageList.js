import ImageShow from "./ImageShow";
import "./ImageList.css";

export default function ImageList( {images} ) {
    const imagesSources = images

    return(
        <div >
            <h4> {images.length === 0 ? 'no' : images.length} articles found</h4>
            <div>
                {imagesSources.map((image) => {
                        return (
                            <div className="image-list" key={image.id}>  
                                <ImageShow  description={image.alt_description} src={image.urls.small}/>
                            </div>
                        )
                })}
            </div>
        </div>
    )
} 