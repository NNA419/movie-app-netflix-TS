import {  useState } from 'react';
import MovieIntro from '../components/MovieIntro';
import MoviesSlider from '../components/MovieSlider';
import { DataMoviesSlider } from '../DataMoviesSlider';

function HomePage() {
    
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    interface CustomStyles {
        content: {
            backgroundColor: string;
            top: string;
            left: string;
            right: string;
            bottom: string;
            marginRight: string;
            transform: string;
        }
    }

    const customStyles: CustomStyles = {
        content : {
            backgroundColor: "red",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        }
    }
  return (
     <>
      <MovieIntro />
      <div className="movies-container">
        {DataMoviesSlider.map((e, index) => {
          return (
            <MoviesSlider MovieKind={e.MovieKind} api={e.api} key={index} />
          );
        })}
      </div>
    </>
  );
}

export default HomePage