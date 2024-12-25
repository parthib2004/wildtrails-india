const locations = [
    {
      name: "Kaziranga National Park",
      coords: [26.7456, 94.2026],
      wildlife: ["One-horned Rhinoceros", "Bengal Tiger", "Elephants"],
      photos: [
        "https://th.bing.com/th/id/R.cfa26230516c52f66cd9a5b5666234c7?rik=vCwIOpX%2boVxpcA&riu=http%3a%2f%2ftourmyodisha.com%2fwp-content%2fuploads%2f2022%2f12%2fKaziranga-National-Park-1.jpg&ehk=jqiExjzPoDKthBMUyoDKs6jzd2m4xrbEQd%2bOEsvfxjc%3d&risl=&pid=ImgRaw&r=0",
        "https://pyt-blogs.imgix.net/2020/06/Rhinos_in_KNP-scaled.jpg?auto=format&ixlib=php-3.3.0",
      ],
      bannerImage: "https://media.gettyimages.com/id/1393007784/video/entrance-gate-of-the-kohora-range-of-kaziranga-national-park-on-april-20-2022-in-kaziranga.jpg?s=640x640&k=20&c=Qzvqe2GIlXeBLhu4y0Yv7a77uT7FwUS0Op-zSJW0yZI=",
    },
    {
      name: "Ranthambore National Park",
      coords: [26.0173, 76.5026],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Hyenas"],
      photos: [
        "https://th.bing.com/th/id/OIP.OrRT_mrYtRuhyDHNCIqogwHaEK?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.FrGF2WS21Z4u-0OQPk38ZAHaEK?rs=1&pid=ImgDetMain",
      ],
      bannerImage: "https://www.ranthamborenationalpark.com/blog/wp-content/uploads/2014/02/ranthambore-gate.jpg",
    },
    {
      name: "Sundarbans National Park",
      coords: [21.9497, 89.1833],
      wildlife: ["Royal Bengal Tiger", "Estuarine Crocodile", "Gangetic Dolphin"],
      photos: [
        "https://beyonder.travel/wp-content/uploads/2020/06/Sundarban_river.jpg",
        "https://www.adotrip.com/public/images/areas/master_images/5f0dbcaae5cb0-Sundarbans_Attractions.jpg",
      ],
      bannerImage: "https://www.tripsavvy.com/thmb/0fWKGKdhg9w3tYftMn4yO7BOy7k=/2121x1414/filters:fill(auto,1)/GettyImages-470328477-59b945beb501e80014c281ba.jpg",
    },
    {
      name: "Jim Corbett National Park",
      coords: [29.5451, 78.7985],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Elephants", "Wild Boars"],
      photos: [
        "https://assets-news.housing.com/news/wp-content/uploads/2022/09/14063602/JIM-CORBETT-FEATURE-compressed.jpg",
        "https://www.countryholidaysinnsuites.com/assets/new/images/jim%20corbett.jpg",
      ],
      bannerImage: "https://corbettparkonline.com/wp-content/uploads/2016/11/Corbett-Museum-1.jpg",
    },
    {
      name: "Bandhavgarh National Park",
      coords: [23.5031, 81.0132],
      wildlife: ["Bengal Tiger", "Leopards", "Wild Boars", "Deer"],
      photos: [
        "https://www.hindustantimes.com/ht-img/img/2023/10/21/1600x900/naveen-naidu-8fB-Ym_rhYU-unsplash_1697877053708_1697877061643.jpg",
        "https://res.cloudinary.com/roundglass/image/upload/c_fill,ar_16:9,g_auto/w_1920,q_auto:best,f_auto/v1589954885/roundglass/sustain/Bandhavgarh-bengal-tiger-cub-crossing-a-stream-dhritiman-mukherjee_bpjmod.jpg",
      ],
      bannerImage: "https://i.pinimg.com/originals/41/2a/3f/412a3fbe7e6183d3ac297d64e0e38102.jpg",
    },
    {
      name: "Periyar Wildlife Sanctuary",
      coords: [9.57, 77.08],
      wildlife: ["Elephants", "Tigers", "Nilgiri Tahr", "Indian Bison"],
      photos: [
        "https://www.tourmyindia.com/socialimg/periyar-national-park.jpg",
        "https://static.trip101.com/paragraph_media/pictures/001/791/693/large/Periyar_Thekkady.jpg?1579588913",
      ],
      bannerImage: "https://im.hunt.in/cg/ker/Iduki/City-Guide/Periyar-Tiger-Reserve.jpg",
    },
    {
      name: "Kanha National Park",
      coords: [22.4723, 80.3797],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Barasingha", "Wild Boars"],
      photos: [
        "https://www.bontravelindia.com/wp-content/uploads/2021/09/Kanha-National-Par-Blog-Feature-scaled.jpg",
        "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2017/06/Kanha-National-Park.jpg",
      ],
      bannerImage: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2020/12/Kanha-Gate-Image--1024x768.jpg",
    },
    {
      name: "Tadoba Andhari Tiger Reserve",
      coords: [20.8581, 79.2625],
      wildlife: ["Tigers", "Leopards", "Sloth Bears", "Indian Wolves"],
      photos: [
        "https://th.bing.com/th/id/OIP.kSf6aGwwZcoG9nmSirbziAHaEq?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.cebd87539c115548b11483f343cfaf6c?rik=5d%2bd8nFzjmHjhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-vmBqIjMq7sk%2fUSomHhAMsQI%2fAAAAAAAAAIg%2fSXiPxY8ohvM%2fs1600%2ftiger2.jpg&ehk=Z95CaPhptdoAf6oac4n9eHE943COJDLzbw1W%2bkr5ZVw%3d&risl=&pid=ImgRaw&r=0",
      ],
      bannerImage: "https://th.bing.com/th/id/OIP.uMQWH-PLcnpO3z8-_tPmtQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      name: "Nanda Devi National Park",
      coords: [30.3945, 79.9675],
      wildlife: ["Snow Leopard", "Himalayan Tahr", "Brown Bear"],
      photos: [
        "https://th.bing.com/th/id/OIP.l5qo8GFhcBx5hXQ48-jCngHaFj?rs=1&pid=ImgDetMain",
        "https://voices.shortpedia.com/wp-content/uploads/2021/08/nanda-devi-national-park-1200x900-1.jpg",
      ],
      bannerImage: "https://th.bing.com/th/id/R.e3cc543bd50d518f9991801e24c533b5?rik=pVvM%2bVXtvBh3ew&riu=http%3a%2f%2fhimalayashelter.com%2fwp-content%2fuploads%2f2023%2f07%2fNanda-Devi-National-Park-2.jpg&ehk=ZsT8uTJn0HB0a2NAH85jgR7tFOEI%2bZ0RE57aogE4a5Y%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Great Himalayan National Park",
      coords: [32.0108, 77.4872],
      wildlife: ["Western Tragopan", "Himalayan Monal", "Himalayan Tahr"],
      photos: [
        "https://www.adotrip.com/public/images/areas/5f2ce3dbb2230-The%20Great%20Himalayan%20National%20Park%20Sightseeing.jpg",
        "https://peakvisor.com/photo/Great-Himalayan-National-Park.jpg",
      ],
      bannerImage: "https://waywardwayfarer.com/wp-content/uploads/2021/01/Screenshot_3-1140x758.png",
    },
    {
      name: "Sariska Tiger Reserve",
      coords: [27.0878, 76.6167],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Indian Wolf", "Nilgai"],
      photos: [
        "https://media-cdn.tripadvisor.com/media/photo-s/17/87/92/9b/sariska-tiger-reserve.jpg",
        "https://www.visittnt.com/blog/wp-content/uploads/2018/02/sariska-national-park.jpg",
      ],
      bannerImage: "https://t4.ftcdn.net/jpg/06/65/17/05/360_F_665170518_7HssJjJw5eQ4nsemHFaZE8UgS2CtuxHF.jpg",
    },
    {
      name: "Gir National Park",
      coords: [21.1236, 70.3194],
      wildlife: ["Asiatic Lion", "Leopards", "Indian Gazelle", "Wild Boar"],
      photos: [
        "https://www.tripsavvy.com/thmb/LY-Be_OAfBG5wmwfeTeQ9lclfrY=/3008x2000/filters:fill(auto,1)/GettyImages-1081266451-5ab50c7f8023b90036495226.jpg",
        "https://th.bing.com/th/id/OIP.SzdB-UyL6VDWtv1NDAKN_gHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
      ],
      bannerImage: "https://www.nativeplanet.com/img/2023/08/entrance-to-gir-national-park_1692460315349-1200x675-20230819212636.jpg",
    },
    {
      name: "Manas National Park",
      coords: [26.6583, 91.0011],
      wildlife: ["Indian Rhino", "Pygmy Hog", "Golden Langur", "Bengal Tiger"],
      photos: [
        "https://th.bing.com/th/id/OIP.dwe0bLD-KAoCimy-jVYXaAHaFj?rs=1&pid=ImgDetMain",
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/MNP_700x466.jpg",
      ],
      bannerImage: "https://th.bing.com/th/id/R.3c55e4872e3b149e228c26a20d9a0d03?rik=BpQBEJ4RrV4jPA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Apu0vLNyA9c%2fVNHxVURQdHI%2fAAAAAAAAG5I%2f0RrMMZWTms0%2fs1600%2fmanas-national-park-gate.jpg&ehk=39T0yZbcZZov62g3OwmNs9Etma%2bmKWgkOkXYqnRd2m8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    },
    {
      name: "Pench National Park",
      coords: [21.6492, 79.3188],
      wildlife: ["Bengal Tiger", "Leopards", "Indian Wolf", "Wild Dogs"],
      photos: [
        "https://th.bing.com/th/id/OIP.zonLLSsEseVLMvvmuLKjuAHaEE?rs=1&pid=ImgDetMain",
        "https://nationalparks-15bc7.kxcdn.com/images/parks/pench/20211002175538-Pench%20National%20Park%20road.jpg",
      ],
      bannerImage: "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2020/11/IMG_20201126_091523-1-1536x1152.jpg",
    },
    {
      name: "Anamalai Tiger Reserve",
      coords: [10.3665, 77.0015],
      wildlife: ["Tigers", "Leopards", "Indian Pangolin", "Nilgiri Langur"],
      photos: [
        "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Anamalai-Tiger-Reserve-Tamil-Nadu.jpg?w=1200&ssl=1",
        "https://www.trawell.in/admin/images/upload/278983684annamalai_tiger_reserve.jpg",
      ],
      bannerImage: "https://www.holidify.com/images/cmsuploads/compressed/dasdjasdbas_20190213161118.JPG",
    },
    {
      name: "Dachigam National Park",
      coords: [34.0847, 74.9111],
      wildlife: ["Kashmir Stag", "Himalayan Black Bear", "Leopard", "Musk Deer"],
      photos: [
        "https://th.bing.com/th/id/OIP.lDr_Aq5gBUvmGh_xcCPK5gHaEj?rs=1&pid=ImgDetMain",
        "https://img.ev.mu/images/attractions/1602/960x640/12030.jpg",
      ],
      bannerImage: "https://th.bing.com/th/id/OIP.smtmPxrPSjGvSRuDXW_3jgHaEC?rs=1&pid=ImgDetMain",
    },
    {
      name: "Bannerghatta National Park",
      coords: [12.8003, 77.5770],
      wildlife: ["White Tiger", "Indian Leopard", "Indian Elephant", "Sloth Bear"],
      photos: [
        "https://th.bing.com/th/id/OIP.71NYUT19FbXmwVgLi72D8AAAAA?rs=1&pid=ImgDetMain",
        "https://www.adotrip.com/public/images/areas/5c6cf2e987b2e-Bannerghatta%20National%20Park%20Sightseeing.jpg",
      ],
      bannerImage: "https://th.bing.com/th/id/OIP.ZRsOjVXE4mRsAm6t_xaSxAHaEr?rs=1&pid=ImgDetMain",
    },
    {
      name: "Silent Valley National Park",
      coords: [11.0784, 76.4572],
      wildlife: ["Lion-tailed Macaque", "Nilgiri Langur", "Indian Pangolin"],
      photos: [
        "https://blog.thomascook.in/wp-content/uploads/2022/08/Silent-Valley-National-Park-In-Kerala-scaled.jpg",
        "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/11/Silent-Valley-National-Park-cover.jpg",
      ],
      bannerImage: "https://www.indiatravelblog.net/wp-content/uploads/2011/07/Silent-Valley-National-Park-entrance.jpg",
    },
    {
      name: "Valley of Flowers National Park",
      coords: [30.7280, 79.6051],
      wildlife: ["Snow Leopard", "Musk Deer", "Himalayan Monal"],
      photos: [
        "https://i.redd.it/r9xhrg8v0fxx.jpg",
        "https://images.prismic.io/indiahike/226b9030-85aa-4032-a0a0-1562d697ff53_ValleyOfFlowers+-+Pavan+Jain+-+Blooming+flowers+of+the+valley.jpg?auto=compress,format",
      ],
      bannerImage: "https://th.bing.com/th/id/OIP.orjaxi1zT9FreBtVLJEAPQHaEA?rs=1&pid=ImgDetMain",
    },
    {
      name: "Keoladeo National Park",
      coords: [27.1591, 77.5217],
      wildlife: ["Siberian Crane", "Painted Stork", "Indian Python"],
      photos: [
        "https://www.adotrip.com/public/images/areas/5f1588755db51-Keoladeo%20National%20Park%20Place%20to%20visit.jpg",
        "https://whc.unesco.org/uploads/thumbs/site_0340_0001-1200-630-20110923001811.jpg",
      ],
      bannerImage: "https://c8.alamy.com/comp/F6D5JR/keoladeo-ghana-national-park-board-bharatpur-rajasthan-india-asia-F6D5JR.jpg",
    },
    {
      name: "Bhagwan Mahavir Wildlife Sanctuary",
      coords: [15.3384, 74.1755],
      wildlife: ["Indian Bison", "Leopard", "King Cobra"],
      photos: [
        "https://itsgoa.com/wp-content/uploads/2022/01/20220128_221800.jpg",
        "https://media-cdn.tripadvisor.com/media/photo-s/02/77/71/c4/shanti-elephant-sanctuary.jpg",
      ],
      bannerImage: "https://th.bing.com/th/id/OIP.sMRG7ZG9fGw4ri0nf5a4iQHaE8?rs=1&pid=ImgDetMain",
    },
    {
      name: "Mudumalai National Park",
      coords: [11.5671, 76.5546],
      wildlife: ["Indian Elephant", "Bengal Tiger", "Leopard", "Sloth Bear"],
      photos: [
        "https://th.bing.com/th/id/R.a037d6d8a3a0dfd2dfa2f23c6e76b993?rik=WJflxFcGLJUccQ&riu=http%3a%2f%2fwww.traveltourguru.in%2fwp-content%2fuploads%2f2017%2f12%2fThe-Mudumalai-National-Park-and-Wildlife-Sanctuary.jpg&ehk=g9AnDpIkhY7%2fCNrDiGOa3TYL9Ozr21Q9o6kNAvxyCfY%3d&risl=&pid=ImgRaw&r=0",
        "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/the-mudumalai-national-park-1654765717_d22e0b942953b6a4357f.webp",
      ],
      bannerImage: "https://1.bp.blogspot.com/-O-5kaoa7wjU/XndA29WB4eI/AAAAAAAATBY/FVEJUUTpuTw4LTvwDSxlDRVq-hiHgplOgCLcBGAsYHQ/s1600/10537412_10154986990710045_5158786368177777463_o.jpg",
    },
  ];
  
  export default locations;
    