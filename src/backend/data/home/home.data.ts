/**
 * Created by TPL-pc on 5/26/2017.
 */
export const homeDb={
  getHomeData() {

    let res ={
      advantages:{
        type: [
          {
            img:"./assets/images/watch.png",
            alt:"24x7, Year Round",
            title: "24x7, Year Round",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"./assets/images/communication.png",
            alt:"Two-way Communication",
            title: "Two-way Communication",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"./assets/images/deploy.png",
            alt:"Build Once and Deploy Everywhere",
            title: "Build Once and Deploy Everywhere",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"./assets/images/personalization.png",
            alt:"Personalization",
            title: "Personalization",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ]
      },
      popularChats:{
        icons: [
          {
            src:"./assets/images/messanger.png",
            alt:"Facebook Messenger"
          },
          {
            src:"assets/images/skype.png",
            alt:"Skype"
          },
          {
            src:"assets/images/slack.png",
            alt:"Slack"
          },
          {
            src:"assets/images/wechat.png",
            alt:"WeChat"
          },
          {
            src:"assets/images/telegram.png",
            alt:"Telegram"
          }
        ],
        textData: [
          {
            text: "Many of the most popular chat such as Facebook messenger, Skype, Slack, WeChat, Telegram now support ChatBots. ChatBots can also run on website or mobile apps inside widgets that support chat-like capabilities."
          }
        ]
      },
      buildSection:{
        buildSectionData: [
          {
            buildImageSrc:"assets/images/build.png",
            buildImageAlt:"Build Your ChatBots",
            buildHeading:"Build your ChatBot in minutes",
            buildText1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            buildText2:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            buildText3:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      },
      graphSection:{
        graphSectionData: [
          {
            graphImageSrc:"assets/images/graph.png",
            graphImageAlt:"Graph",
            graphHeading:"Increase Customer Sales & Satisfaction",
            graphText:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        ]
      }
    };

    return Promise.resolve(res);
  }};
