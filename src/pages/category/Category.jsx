import { useParams } from 'react-router-dom'
import React from "react";
import { CategoryArr } from '../../components/utilits/categoryes.js';
import * as S from '../../components/trackList/TrackList.styles.js'
import { Sidebar } from '../../components/sidebar/Sidebar.js'
import { TrackListTitle } from "../../components/trackListTitle/TrackListTitle.jsx"
import { CenterblockSearch } from "../../components/centerblockSearch/CenterblockSearch.js"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackList } from '../../components/trackList/TrackList';
import { useGetSelectionsQuery } from "../../serviseQuery/tracks";
import { setCurrentPage, setCategoryArr } from "../../store/slices/track";
import {
  categoryArrSelector,
  filtersPlaylistSelector,
} from "../../store/selectors/track";

export function Category({loadingTracksError,}) {

  const categoryArr = useSelector(categoryArrSelector);
  const filtre = useSelector(filtersPlaylistSelector);
  const params = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id));
  const tracks =
    filtre?.isActiveSort || filtre?.isActiveAuthors || filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : categoryArr;

  useEffect(() => {
    dispatch(setCategoryArr(data?.items));
  }, [filtre.isActiveSort, tracks]);
  
  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage("Category"));
      dispatch(setCategoryArr(data?.items));
    }
  }, [data]);

  const curentcategory = CategoryArr.find(
    (category) => category.id === Number(params.id),
  )

  return (
<>
    <S.MainCenterblock>
    <CenterblockSearch props={curentcategory.name} />
    
      <TrackListTitle />
    <TrackList
      tracks={tracks}
      error={error}
      isLoading={isLoading}
    />

</S.MainCenterblock>
      <Sidebar
            isLoading = {isLoading}
            loadingTracksError={loadingTracksError}
                />
  </>
  );
}