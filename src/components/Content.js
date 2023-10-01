import { Track_1, Track_2, Track_3, Track_4, Track_5, Track_6, Track_7, Track_8, Track_9, Track_10, Track_11, Track_12, Track_13, Track_14, Track_15, Track_16 } from "./Track"

export function Content() {
    return (
        <div className="content__playlist playlist">
        <div className="playlist__item">
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <svg className="track__title-svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  Guilt <span className="track__title-span"></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                Nero
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                Welcome Reality
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">4:44</span>
            </div>
          </div>
        </div>

       < Track_1 />
       < Track_2 />
       < Track_3 />
       < Track_4 />
       < Track_5 />
       < Track_6 />
       < Track_7 />
       < Track_8 />
       < Track_9 />
       < Track_10 />
       < Track_11 />
       < Track_12 />
       < Track_13 />
       < Track_14 />
       < Track_15 />
       < Track_16 />

      </div>
    )
};