document.getElementById('submit-btn').addEventListener('click', function(){
    getLyrics();
})
function getLyrics(){
    document.getElementById('search-terms').innerHTML = "";
    const inputValue = document.getElementById('input').value;
    fetch (`https://api.lyrics.ovh/suggest/${inputValue}`)
            .then(res => res.json())
            .then(data => {
                let getData = data.data;
                // const musicTitle = document.getElementById('music-name').innerText = getData[0].title;
                // const artistName = document.getElementById('artist-name').innerText = getData[0].artist.name;
                const fetchData = data;
                for (let i = 0; i < getData.length; i++) {
                    const getTitle = getData[i].title;
                    const getArtistName = getData[i].artist.name;
                    document.getElementById('search-terms').innerHTML +=
                    `
                    <div id="search-terms" class="single-result row align-items-center my-3 p-3">
                            <div class="col-md-9">
                                <h3 class="lyrics-name">${getTitle}</h3>
                                <p class="author lead">Album by <span>${getArtistName}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <a href="#single-lyrics"><button onclick = "lyricsButton(${i})" class="btn btn-success">Get Lyrics</button></a>
                            </div>
                    </div>
                        `
                    if(i == 9){
                        break;
                    }
                }
            })
            if(inputValue == ""){
                alert("Search value can not be empty");
            }

    // document.getElementById('input').value = '';
}

function lyricsButton(index){
    // document.getElementById('single-lyrics').innerHTML = "";
    const inputValue = document.getElementById('input').value;
    fetch (`https://api.lyrics.ovh/suggest/${inputValue}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const title = data.data[index].title;
                const artist = data.data[index].artist.name;

                fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
                .then(res => res.json())
                .then(data => {
                    const lyrics = data.lyrics;
                    document.getElementById('single-lyrics').innerHTML = `<pre> ${lyrics} </pre>`

                    if(lyrics == undefined){
                        alert("Sorry this lyrics is not available right now");
                    }
                })



            })
}