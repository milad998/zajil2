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
            
        await axios.post("https://discord.com/api/webhooks/1386825087683924008/BWZ8TNPakzhyhq6cmH0xYHgxWkJ-MCGl_teyFjD7gKpkqO6IEhrvzedQFiozCQfYNyOT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
