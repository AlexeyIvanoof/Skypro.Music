import { Track } from "../Track"
import * as S from './Content.styles.js'

export function Content({ isLoaded }) {
    return (
        <S.ContentPlaylist>
    
     < Track isLoaded={ isLoaded }/>

      </S.ContentPlaylist>
    )
};