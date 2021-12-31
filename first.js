       
        document.getElementById('submit-btn').addEventListener('click', function(){
            const inputValue = document.getElementById('input').value;
            console.log(inputValue);
            fetch (`https://api.lyrics.ovh/suggest/${inputValue}`)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data.data[0].artist.name);
                        let getData = data.data;
                        // console.log(getData[0].title);
                        document.getElementById('music-name').innerText = getData[0].title;
                        document.getElementById('artist-name').innerText = getData[0].artist.name;
                        // let getData = data.data;
                        // for (let i = 0; i < 11; i++) {
                        //     const element = getData[i].title;
                        //     console.log(element);
                        // }


                    })

            document.getElementById('input').value = '';
        })

        document.getElementById('get-lyrics').addEventListener('click', function(){
            
            const artist = document.getElementById('artist-name').innerText;
            const title = document.getElementById('music-name').innerText;
            // console.log(typeof(artist), title);
            fetch (`https://api.lyrics.ovh/v1/${artist}/${title}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            document.getElementById('lyrics').innerText = data.lyrics;
                        })
                        
            document.getElementById('music-lyrics').style.display = 'block';
        })
