
export default function Intro() {
    return (
        <main className="bg-[url('../public/synthwaveSun.gif')] bg-cover bg-center text-center">
          <div id='intro'>

          </div>
        <h1 className="text-6xl font-bold">
          Welcome! 👋
        </h1>
        <p className="mt-3 text-2xl">
          I'm Minh Nguyen. I'm currently a third year Computer Science major at University of Saskatchewan.
        </p>
        <p className='mt-3 text-2xl'>
          This updated portfolio project is a work in progress. In the meantime, please checkout my {' '}
          <a className='mt-3 text-2xl font-bold text-purple-400' href='https://minhnguyen4958.github.io/'>
            original portfolio 
          </a> and my {' '}
           <a className='mt-3 text-2xl font-bold text-purple-400' href='https://open.spotify.com/playlist/52J8Y1q4E26a2ySCwe3M3R?si=17c6a28cfbce4afa'> Spotify playlist :)</a> 
        </p>
      </main>
    )
}