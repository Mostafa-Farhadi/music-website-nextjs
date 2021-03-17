const Music = (props) => {
    const {nameOfClass, imageLink, musicName, singerName} = props
    return ( 
        <div className={nameOfClass}>
            <img src={imageLink} alt="music"/>
            <h3>{musicName}</h3>
            <p>{singerName}</p>
        </div>
    );
}

export default Music;