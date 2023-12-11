import "./ImageShow.css";

export default function ImageShow( props ) {
    return(
        <div className="img">
            <img src={props.src} alt={props.description} />
        </div>
    )
} 