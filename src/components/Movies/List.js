import React from 'react';
import MovieCard from './card';




class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isChecked: false,
            search: ""

        };
        this.filtersearch = this.filtersearch.bind(this);


    }

    filtersearch(e) {


        const name = e.target.name;
        if (name === "itext") {
            const value = e.target.value;
            const newData = this.props.data.filter(m => m.Title.includes(value));
            this.setState({ data: newData, search: value });

        }
        if (name === "icheck") {


            const watchedData = this.state.data.filter(m => m.Title.includes(this.state.search) && m.watched === true)

            this.setState({
                data: watchedData,
                isChecked: !this.state.isChecked

            });
        }



    }


    render() {
        const { data } = this.state;


        return (
            <>

                <input type="text" name="itext" value={this.state.value} onChange={this.filtersearch}></input>
                <span>watched</span>
                <input type="checkbox" name="icheck" onChange={this.filtersearch} checked={this.state.checked}></input>
                <br></br>
                <br></br>
                <br></br>
                <div>{Array.isArray(data) && data.map(m => <MovieCard key={m.imdbID}{...m} />)}
                </div>
            </>
        );
    }
}
export default MovieList;

















// const MovieList = ({ data }) => Array.isArray(data) && data.map(m => <MovieCard key={m.imdbID}{...m} />);