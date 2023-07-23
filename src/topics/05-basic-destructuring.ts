interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details : Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "John",
        year: 2015,
    }
}

const song = 'New song'
const { song:anotherSong , details  } = audioPlayer;
const { author } = details


const [ ,  , trunks = 'Not found' ]:string[] = ['Goku', 'Vegeta']




console.log('Personaje 3:', trunks || '')


