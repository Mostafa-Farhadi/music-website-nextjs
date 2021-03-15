import Music from './Music'

const TopChart = (props) => {
    const {nameOfClass, title, information} = props
    return ( 
        <div className={nameOfClass}>
            <h2>{title}</h2>
            <p>{information}</p>
            <hr/>
            <div className="box-container">
                <Music nameOfClass="box one">Top Chart Music 1</Music>
                <Music nameOfClass="box two">Top Chart Music 2</Music>
                <Music nameOfClass="box three">Top Chart Music 3</Music>
                <Music nameOfClass="box four">Top Chart Music 4</Music>
                <Music nameOfClass="box five">Top Chart Music 5</Music>
                <Music nameOfClass="box six">Top Chart Music 6</Music>
            </div>
        </div>
    );
}

export default TopChart;