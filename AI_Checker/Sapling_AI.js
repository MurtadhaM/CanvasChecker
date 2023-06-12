const sample_Text =`Fantasy stories allow readers to escape into a world of imagination and explore new places and cultures. They can also be used to explore themes such as good versus evil, love and loss, courage and determination, and the power of friendship. Many fantasy stories are based on mythology, folklore, and other sources of inspiration.
Fantasy can be found in many forms, including books, movies, television shows, video games, and comic books. Whether they are set in a medieval world or a futuristic one, fantasy stories are often populated with characters who have special abilities and magical powers. They also often involve settings that are filled with mythical creatures, such as dragons and elves, and powerful magical artifacts.
Fantasy stories can take readers on an exciting journey of adventure, mystery, and magic. They can also be used to explore themes of courage, friendship, and love in a way that is both entertaining and thought-provoking. Fantasy can be a great way to explore new worlds and cultures, while also inspiring readers to think differently about the world around them.
`;

const CheckPlagiarism = async (STRING_INPUT,  ENDPOINT) => {
    try {
        const response = await fetch("https://api.sapling.ai/api/v1/classify_generated_tokens_nk", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/114.0",
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/json",
                "X-CSRFToken": "IjQ0OTY2MDNlNmU5NDBhN2FlNGMxZWRmOTY4ZjhiOWQ0YzczOTVjMjQi.ZIZOtA.-l91K0zIwIpzC1RGHbH7rk5E7Jg",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            },
            "referrer": "https://sapling.ai/",
    "body": JSON.stringify({"text": (STRING_INPUT)}),
            "method": "POST",
            "mode": "cors"
        });
const data = await response.json();
/**
 * Filter the #percent from the response
 */
console.log(data);
return data;
} catch (error) {
    console.log(error);
}
} 



exports.CheckPlagiarism = CheckPlagiarism;
exports.sample_Text = sample_Text;
export default Sapling;
