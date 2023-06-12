const sample_Text =`Fantasy stories allow readers to escape into a world of imagination and explore new places and cultures. They can also be used to explore themes such as good versus evil, love and loss, courage and determination, and the power of friendship. Many fantasy stories are based on mythology, folklore, and other sources of inspiration.
Fantasy can be found in many forms, including books, movies, television shows, video games, and comic books. Whether they are set in a medieval world or a futuristic one, fantasy stories are often populated with characters who have special abilities and magical powers. They also often involve settings that are filled with mythical creatures, such as dragons and elves, and powerful magical artifacts.
Fantasy stories can take readers on an exciting journey of adventure, mystery, and magic. They can also be used to explore themes of courage, friendship, and love in a way that is both entertaining and thought-provoking. Fantasy can be a great way to explore new worlds and cultures, while also inspiring readers to think differently about the world around them.
`


const getAuthToken = async () => {
    let token = process.env.COPYLEAKS_TOKEN;
    
    let authorization = "Bearer " + token;

    return authorization;
}

const CheckPlagiarism = async (STRING_INPUT, URL, ENDPOINT) => {
    try {
    console.log("Checking plagiarism for: " + STRING_INPUT + " and " + URL);
    let authToken = await getAuthToken();
    console.log("Auth Token: " + authToken);
    const response = await fetch(ENDPOINT, {


    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "authorization": await getAuthToken(),
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://app.copyleaks.com/api/browser-extension/v2/ai-scan",
    "body":JSON.stringify({"text": STRING_INPUT, "url": URL}),
    "method": "POST",
    "mode": "cors"
    
}  );

    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
        console.log(error);
    }
} 





exports.CheckPlagiarism = CheckPlagiarism;
exports.sample_Text = sample_Text;
export default CopyLeaks;

