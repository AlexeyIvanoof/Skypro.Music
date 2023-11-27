import * as S from './CenterblockSearch.styles'
import React from "react";
import { useDispatch } from "react-redux";
import { setFilterPlaylist } from '../../store/slices/track';


      export function CenterblockSearch({props}) {
        const dispatch = useDispatch();
        return (
            <>
            <S.CenterblockSearch>
            <S.SearchSvg>
              <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText  type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e) => {
          dispatch(
            setFilterPlaylist({
              search: e.target.value,
            })
          );
        }} />
          </S.CenterblockSearch>
          <S.CenterblockH2>{props}</S.CenterblockH2>
          </>
        );
        }