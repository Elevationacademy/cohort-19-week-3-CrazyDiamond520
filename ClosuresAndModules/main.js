//exrecise 1

// const StringFormatter = function(){
//     let myword = ""
//     const capitalizeFirst = function(word){
//         myword = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
//         console.log(myword)
//     }
    
//     return {
//         capitalizeFirst
//     }
// }

// const formatter = StringFormatter()
// console.log(formatter.capitalizeFirst("hello"))

//exrecise 2

// const Bank = function(){
//     let money = 500
//     const depositCash = cash => money+=cash
//     const checkBalance = () => console.log(money)

//     return {
//         deposit: depositCash,
//         balance: checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.balance()

//exrecise 3

const songsManager = function(){
    const songs = {}
    const addSong = function(songName, songURL){
        songs[songName] = songURL.slice(32)
    }
    const getSong = function(songName){
        console.log("https://www.youtube.com/watch?v" + songs[songName])
    }
    return{
        addSong,
        getSong
    }
}

const songsManager1 = songsManager()
songsManager1.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager1.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager1.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager1.getSong("sax") 
