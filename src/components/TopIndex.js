import { AudioPlayer } from "./AudioPlayer"
import { TrackList } from "./TrackList"
import { Sidebar } from "./Sidebar"
import { MainNav } from "./NavMenu"
import { useState, useEffect } from 'react'



export function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => clearTimeout(timeout); 
    }
  }, [isLoaded]);
    return (
<div className="wrapper">
<div className="container">
  <main className="main">
   
  <MainNav />

  <TrackList isLoaded={isLoaded} />

  <Sidebar isLoaded={isLoaded}/>
   
  </main>

 < AudioPlayer isLoaded={isLoaded}/> 

 

  <footer className="footer"></footer>
</div>
</div>
    )
};