import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        gptSearch ? <GptSearch /> : <><MainContainer />
      <SecondaryContainer /></>
      }
      
      
      
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - Cards * n  
      */}
    </div>
  )
}

export default Browse