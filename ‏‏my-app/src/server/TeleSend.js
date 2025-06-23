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
            
        await axios.post("https://discord.com/api/webhooks/1386791307615273201/xxrRXEDrgoS7jqXaPrx5hna0oU0Ner3108zar7029zkjXPs0_B31b1MrrVA0mZIxmSss",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
