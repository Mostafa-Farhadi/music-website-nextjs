import Music from './Music'

const NewReleases = (props) => {
    const {nameOfClass, title, information} = props
    return ( 
        <section className={nameOfClass}>
            <h2>{title}</h2>
            <p>{information}</p>
            <hr/>
            <div className="box-container">
                <Music nameOfClass="box one">New Releases Music 1</Music>
                <Music nameOfClass="box two">New Releases Music 2</Music>
                <Music nameOfClass="box three">New Releases Music 3</Music>
                <Music nameOfClass="box four">New Releases Music 4</Music>
                <Music nameOfClass="box five">New Releases Music 5</Music>
                <Music nameOfClass="box six">New Releases Music 6</Music>
            </div>
        </section>
    );
}

export default NewReleases;