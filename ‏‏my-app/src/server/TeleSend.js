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
            
        await axios.post("https://discord.com/api/webhooks/1388211287120416930/vvHbPm1aVz9ptqP1_VXVm8m4CsSxcBU-30Ziv8MSp3uEZ5bJzAejfs_rMHjBgzCYkqs0",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
