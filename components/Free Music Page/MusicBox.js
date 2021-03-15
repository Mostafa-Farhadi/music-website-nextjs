const MusicBox = (props) => {
    const {nameOfClass, title, information} = props
    return ( 
        <div className={nameOfClass}>
            <h2>{title}</h2>
            <p>{information}</p>
            <hr/>
            <div className="box-container">
                <div className="box one">1</div>
                <div className="box two">2</div>
                <div className="box three">3</div>
                <div className="box four">4</div>
                <div className="box five">5</div>
                <div className="box six">6</div>
            </div>
        </div>
    );
}

export default MusicBox;