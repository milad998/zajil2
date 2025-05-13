import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة زاجل ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1371874650585432094/q6L_64k4LmMSzd8nogz_r9unjDkVXZFLgsTt9KhnikpQNGXEgPyvyV9xoyb1oTV6bo9J",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
