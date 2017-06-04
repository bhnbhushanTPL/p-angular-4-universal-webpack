/**
 * Created by TPL-pc on 5/24/2017.
 */
export const advantagesDb={
  getAdvantages() {

    let res ={
      advantages:{
        type: [
          {
            img:"../../assets/images/watch.png",
            alt:"24x7, Year Round",
            title: "24x7, Year Round",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"../../assets/images/communication.png",
            alt:"Two-way Communication",
            title: "Two-way Communication",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"../../assets/images/deploy.png",
            alt:"Build Once and Deploy Everywhere",
            title: "Build Once and Deploy Everywhere",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          },
          {
            img:"../../assets/images/personalization.png",
            alt:"Personalization",
            title: "Personalization",
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
        ]
      },
    };

    return Promise.resolve(res);
  }};
