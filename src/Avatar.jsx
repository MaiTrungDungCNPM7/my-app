import './global.css'

function Avatar({src, name, size}) {
    return(
        <div className={`avatar-container avatar-${size}`}>
            <img src={src} alt={name} className="avatar-img" />
            <h3 className="avatar-name">{name}</h3>
        </div>
    );
}

export default Avatar;