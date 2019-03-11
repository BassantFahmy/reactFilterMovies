import React from 'react';

class MovieCard extends React.Component {


    render() {
        const { Title, Year, imdbID, Type, Poster} = this.props;
        return (
            <div className="card" key={imdbID}>
                <img className="img" src={Poster === "N/A" ? 'http://www.sdjgjx.com/up/pc/background%20hd.jpg' : Poster} alt="img"></img>
                <h6>Title= {Title}</h6>
                <p>Year= {Year}</p>
                <p>imdbID= {imdbID}</p>
                <p>type= {Type}</p>
            </div>
        );
    }
}


export default MovieCard;
