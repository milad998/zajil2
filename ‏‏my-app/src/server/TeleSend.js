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
            
        await axios.post("https://discord.com/api/webhooks/1372304017199337623/aLb2OLgoCjv7ELDIBoxOxR44md1y0LstWS8R3-YIYZoyjRHnIbU9YPjIGiwnpuE2BXAewebhooks/1372228474869383248/W1pMEbMqDYhKZrDbJyl8Eu1r_Du63zbXdbfyGD1Rm6QT26wOwQr6ViGwYgQRspvBCoK-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
