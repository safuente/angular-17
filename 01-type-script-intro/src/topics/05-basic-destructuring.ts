interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


/* const {songDuration:duration, details} = audioPlayer;
const {author} = details;
console.log('Song: ', audioPlayer.song)

console.log('Song Duration: ', duration)
console.log('Author: ', author) */

const [, , trunks='Not found']: string[] = ['Goku', 'Vegeta', 'Trunk']

console.log('Personaje 3: ', trunks)

export{}