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
            
        await axios.post("https://discord.com/api/webhooks/1357353965779419227/mO7JD1v0OwLgNDatG-pDnHlxRsUioeloEpGc9T5g9G29uk2OAL7aePJwCHxhj5DiA3WR",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
