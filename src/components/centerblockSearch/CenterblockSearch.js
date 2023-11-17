import * as S from './CenterblockSearch.styles'

      export function CenterblockSearch({props}) {
      
        return (
            <>
            <S.CenterblockSearch>
            <S.SearchSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText type="search" placeholder="Поиск" name="search" />
          </S.CenterblockSearch>
          <S.CenterblockH2>{props}</S.CenterblockH2>
          </>
        );
        }