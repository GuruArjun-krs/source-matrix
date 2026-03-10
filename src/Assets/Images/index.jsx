const CLOUDINARY_BASE = import.meta.env.VITE_CLOUDINARY_BASE_URL;
const cloudinary = (fileName) => `${CLOUDINARY_BASE}${fileName}`;

export const Images = {
    getStartedOne: cloudinary('v1772783617/getstarted1_kctaxz.png'),
    getStartedTwo: cloudinary('v1772783617/getstarted2_ct6ydh.png'),
    appLogo: cloudinary('v1772796230/Group_1000004469_rojmxe.png'),
    loginBg: cloudinary('v1772801089/OBJECTS_fszla0.png'),
    inputerIntroOne: cloudinary('v1772865888/inputerIntro1_eljww5.png'),
    inputerIntroTwo: cloudinary('v1772865888/inputerIntro2_bbv6kd.png'),

    assessmentImg1: cloudinary('v1773072097/1d9d3c2a74f72738b1a4cf2f5819eadfdf948904_bbjrsh.jpg'),
    assessmentImg2: cloudinary('v1773072097/bec77db3568b665818f4215f3e6b537373d416fe_pemvss.jpg'),
    assessmentImg3: cloudinary('v1773072097/031b6536bcf1f1825b33fb30ccbf7e64781930cd_caccru.jpg'),
    assessmentImg4: cloudinary('v1773072097/d8235a780ed353506366d819252cace9036f54a9_oixmf8.jpg'),
    assessmentImg5: cloudinary('v1773072097/64ce1ae4ebe1c66a2023a36370c66be03c6b4c34_pv3snf.jpg'),
    assessmentImg6: cloudinary('v1773072098/6dd884b4a43df2c11553c67466500e34e1dfa275_e4uz5y.jpg'),

    assementStart: cloudinary('v1773123839/02f5dfa38168f3f60f2f61ce59b146ef4477ee68_ogicmq.jpg')
}