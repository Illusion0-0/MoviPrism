import React from "react";
import loadingGif from "./loading.gif";
import "./SearchBar.css";

let s="", MAX_LENGTH = 30;
const SearchResult = (props) => {
  {props.data.genres.map((item) => (
          s+=item+", "
  ))}
  return (
    <div className="Search-Result-Item">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.data.poster}`}
        alt="Movie Poster"
      ></img>
      <p className="Search-Result-Movie-Name"><b>{props.data.name}</b></p>
      <p className="Search-Result-Movie-Genre">
        
        {s.length > MAX_LENGTH ?
        (
          <i>
            {`${s.substring(0, MAX_LENGTH)}...`}
          </i>
        ) :
        <>{s}</>
      }
      </p>
      {props.data.adult ? <p>18+</p> : <></>}
    </div>
  );
};

const NotFound = () => {
  return (
    <>
      <div className="Search-Result-Not-Found">Not Found 😥</div>
    </>
  );
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      isLoading: true,
      performingRequest: false,
      isFocused: false,
      moviesData: [],
      isChildFocused: false,
    };
    this.pauseTimer = null;
    this.urlApi = "http://127.0.0.1:5000/search?name=";
  }

  refreshTimer = () => {
    clearTimeout(this.pauseTimer);
  };

  setTimer = () => {
    if (!this.state.performingRequest) {
      this.setState({ isLoading: true });
      this.pauseTimer = setTimeout(this.sendSearchRequest, 1000);
      this.setState({ performingRequest: true });
    }
  };

  sendSearchRequest = () => {
    this.setState({ performingRequest: false });
    if (this.state.searchterm === "") return;
    console.log(`Request sent with ${this.state.searchterm}`);
    fetch(this.urlApi + this.state.searchterm)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((dat) => {
        console.log(dat);
        this.setState({ isLoading: false, moviesData: dat });
      })
      .catch(() => {
        this.setState({ moviesData: [] });
      });
  };

  handleBlur = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (this.state.isChildFocused) return;
    this.setState({
      isFocused: false,
      moviesData: [],
      isLoading: true,
      searchterm: "",
    });
  };

  handleInput = (e) => {
    this.setTimer();
    const value = e.target.value;
    this.setState({
      searchterm: value,
    });
  };

  handleClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target.classList.contains("Search-Bar-Backdrop")) {
      console.log("Search bar");
      this.setState({
        isFocused: false,
        moviesData: [],
        isLoading: true,
        searchterm: "",
      });
      this.setState({ isChildFocused: true });
    } else if (e.target.classList.contains("Search-Bar")){
      this.setState({isFocused : true})
    }
  };

  render() {
    const setFocus = () => {
      this.setState({ isFocused: false });
    };
    return (
      <div className = "Search-Bar-Main"  onMouseDown={this.handleClick}>
        {this.state.isFocused ? <div className="Search-Bar-Backdrop"></div>: <></>}
        <div className="Search-Bar">
          <input
            type="text"
            placeholder="Search Your Movies"
            name="searchterm"
            value={this.state.searchterm}
            onChange={this.handleInput}
            onFocus={() => this.setState({ isFocused: true })}
          />
          {this.state.isFocused ? (
            <div className="Search-Bar-Results">`
              {this.state.isLoading ? (
                <img src={loadingGif} alt="Loading gif"></img>
              ) : (
                <div>
                  {this.state.moviesData.length != 0 ? (
                    this.state.moviesData.map((item) => (
                      <a href={`/movie/${item.id}`} onClick={setFocus}>
                        <SearchResult key={item.id} data={item} />
                        <hr/>
                      </a>
                    ))
                  ) : (
                    <NotFound />
                  )}
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
