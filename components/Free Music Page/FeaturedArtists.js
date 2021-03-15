import Music from './Music'

const FeaturedArtists = (props) => {
    const {nameOfClass, title, information} = props
    return ( 
        <section className={nameOfClass}>
            <h2>{title}</h2>
            <p>{information}</p>
            <hr/>
            <div className="box-container">
                <Music nameOfClass="box one">Featured Artists Music 1</Music>
                <Music nameOfClass="box two">Featured Artists Music 2</Music>
                <Music nameOfClass="box three">Featured Artists Music 3</Music>
                <Music nameOfClass="box four">Featured Artists Music 4</Music>
                <Music nameOfClass="box five">Featured Artists Music 5</Music>
                <Music nameOfClass="box six">Featured Artists Music 6</Music>
            </div>
        </section>
    );
}

export default FeaturedArtists;