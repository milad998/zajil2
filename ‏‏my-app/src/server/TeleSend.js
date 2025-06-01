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
            
        await axios.post("https://discord.com/api/webhooks/1378779697688871094/sZB47fqk1AkmqgqtTW9bsPAiW7AGfK_wfj4UcejpK9ZQVPjMWi0MXB1UBNZqAXqKTRls",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
