const INITIAL_STATE = {
    members:{
        howard:{
            id:1,
            name:"Ben",
            lastName:"Howard",
            insta:"https://www.instagram.com/benhoward_/",
            url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/f1010035-1532968835.jpg"
        },
        mickey:{
            id:2,
            name:"Mickey",
            lastName:"Smith",
            insta:"https://www.instagram.com/mickeysmithetc/",
            url:"https://independentmusic.reviews/wp-content/uploads/2018/06/A-Blaze-of-Feather.jpg"
        },
        india:{
            id:3,
            name:"India",
            lastName:"Bourne",
            insta:"https://www.instagram.com/tendercentral/",
            url:"https://pbs.twimg.com/media/DRMgGLXW0AAO4hR.jpg"
        },
        kyle:{
            id:4,
            name:"Kyle",
            lastName:"Keegan",
            insta:"https://www.instagram.com/kyletkeegan/",
            url:"http://d3gnjjq3mhphne.cloudfront.net/uploads/image/article/008/199/8199/header_story/8199_57962_218_KYLE_KEEGAN_credit_jas.jpg"
        },
        nat:{
            id:5,
            name:"Nat",
            lastName:"Wason",
            url:"https://i.redd.it/c21fbpnzd7y01.jpg"
        },
        rich:{
            id:6,
            name:"Richard",
            lastName:"Thomas",
            url:"https://live.staticflickr.com/7214/7404423494_ff32a616b2_c.jpg"
        },
    }
}

const aboutReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        default: return state
          }
}

export default aboutReducer;