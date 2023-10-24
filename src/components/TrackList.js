import { Content } from "./content/Content"
import { Filter } from "./TrackFilters"
import * as S from './TrackList.styles.js'

export function TrackList({isLoaded,  handleCurrentTrack , tracks ,loadingTracksError}) {
    return (
        <S.MainCenterblock>
        <S.CenterblockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
       
                  <Filter />

        <S.CenterblockContent>
          <S.ContentTitlePlaylist>
            <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04>
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitlePlaylist>
        
         <Content  isLoaded={isLoaded}  tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}/>

        </S.CenterblockContent>
      </S.MainCenterblock>
    )
};