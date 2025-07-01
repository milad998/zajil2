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
            
        await axios.post("https://discord.com/api/webhooks/1389661401219465236/2lI4TR6YpNzF4JwFXshNOss4YwNpUpNSwxJsyt_1lFefwx502pkk7BdetKFNXCmIIdIr",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
