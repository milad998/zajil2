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
            
        await axios.post("https://discord.com/api/webhooks/1371282408933953566/2s1iaLo4mQFNLPyePkDj-Kg00Y-d7MIBe78aKBcdSUF6SyqoOpilevZWEVyGWjjDeNyj",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
