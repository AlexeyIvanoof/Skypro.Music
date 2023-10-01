import { Navigation } from "./NavMenu"
import { AudioPlayer } from "./AudioPlayer"
import { TrackList } from "./TrackList"
import { Sidebar } from "./Sidebar"

export function Index() {
    return (
<div className="wrapper">
<div className="container">
  <main className="main">
   
  <Navigation />

  <TrackList />

  <Sidebar />
   
  </main>

 < AudioPlayer />

  <footer className="footer"></footer>
</div>
</div>
    )
};