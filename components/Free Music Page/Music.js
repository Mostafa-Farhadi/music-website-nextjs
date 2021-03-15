const Music = (props) => {
    const {nameOfClass, children} = props
    return ( 
        <div className={nameOfClass}>
            {children}
        </div>
    );
}

export default Music;