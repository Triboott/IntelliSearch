function search() {
    // Save search in the URL variable
    let url = document.getElementById("search").value;
    // URL Code and add Google Dorking depending on the selected option
    let encodedURL;

    switch (document.getElementById("fileType").value) {
        case "movies":
            encodedURL = encodeURIComponent(url + ' +(mkv|mp4|avi|mov|mpg|wmv|divx|mpeg) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
        case "books":
            encodedURL = encodeURIComponent(url + ' +(MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
        case "music":
            encodedURL = encodeURIComponent(url + ' +(mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
        case "software":
            encodedURL = encodeURIComponent(url + ' +(exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
        case "images":
            encodedURL = encodeURIComponent(url + ' +(jpg|png|bmp|gif|tif|tiff|psd) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
        default:
            encodedURL = encodeURIComponent(url + ' +(mkv|mp4|avi|mov|mpg|wmv|divx|mpeg|' + 'MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX|' + 'mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod|' + 'exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk|' + 'jpg|png|bmp|gif|tif|tiff|psd) ' + '-inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) ' + 'intitle:index.of ' + '-inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)');
            break;
      }

    // Open URL on a new tab
    window.open(`https://www.google.com/search?q=${encodedURL}`, '_blank', 'noopener=yes');
}

/*  Search Bar Event Listener (Enter) */
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".searchBar");
    const searchButton = document.querySelector(".searchIcon");

    searchBar.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});
