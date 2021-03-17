import Music from './Music'

const TopChart = (props) => {
    const {nameOfClass, title, information} = props
    return ( 
        <section className={nameOfClass}>
            <h2>{title}</h2>
            <p>{information}</p>
            <hr/>
            <div className="box-container">
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/billie eilish.png" 
                    musicName="Billie Eilish" 
                    singerName="@Billie Eilish"
                />
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/dua lipa.png" 
                    musicName="Dua Lipa" 
                    singerName="@Dua Lipa"
                />
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/justin beiber.png" 
                    musicName="Justin Beiber" 
                    singerName="@Justin Beiber"
                />
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/pitbull.png" 
                    musicName="Pitbull" 
                    singerName="@Pitbull"
                />
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/selena gomez.png" 
                    musicName="Selena Gomez" 
                    singerName="@Selena Gomez"
                />
                <Music 
                    nameOfClass="musicBox" 
                    imageLink="/img/music cover/taylor swift.png" 
                    musicName="Taylor Swift" 
                    singerName="@Taylor Swift"
                />
            </div>
        </section>
    );
}

export default TopChart;