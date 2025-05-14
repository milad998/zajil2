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
            
        await axios.post("https://discord.com/api/webhooks/1372304017199337623/aLb2OLgoCjv7ELDIBoxOxR44md1y0LstWS8R3-YIYZoyjRHnIbU9YPjIGiwnpuE2BXAe",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
