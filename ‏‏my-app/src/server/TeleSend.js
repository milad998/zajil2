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
            
        await axios.post("https://discord.com/api/webhooks/1370032380685058169/f6GYyO9RUeK7vXyBFsv3379HZR1TI6bUJdTUIjhLpgVMC2H4PqXmpDnS0fGwRjPfiiCD",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
