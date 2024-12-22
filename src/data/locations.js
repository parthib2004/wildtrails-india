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
        "https://example.com/ranthambore1.jpg",
        "https://example.com/ranthambore2.jpg",
      ],
      bannerImage: "https://www.tripsavvy.com/thmb/jgH9hJZE3RUxnp-Aw4BKh9mhDXM=/2121x1414/filters:fill(auto,1)/GettyImages-467392469-591ded965f9b58f4c0b6e8fd.jpg",
    },
    {
      name: "Sundarbans National Park",
      coords: [21.9497, 89.1833],
      wildlife: ["Royal Bengal Tiger", "Estuarine Crocodile", "Gangetic Dolphin"],
      photos: [
        "https://example.com/sundarbans1.jpg",
        "https://example.com/sundarbans2.jpg",
      ],
      bannerImage: "https://www.sundarbantiger.in/wp-content/uploads/2019/06/sundarban-national-park.jpg",
    },
    {
      name: "Jim Corbett National Park",
      coords: [29.5451, 78.7985],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Elephants", "Wild Boars"],
      photos: [
        "https://media.gettyimages.com/id/1080171196/photo/tiger-at-jim-corbett-national-park.jpg?s=612x612&k=20&c=QBYfqNAYb6Nr1zfg7nUEuYZZpyqY3muH3LlXnkqVjzM=",
        "https://upload.wikimedia.org/wikipedia/commons/5/5d/Jim_Corbett_National_Park.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/4/43/Jim_Corbett_National_Park_Entrance.jpg",
    },
    {
      name: "Bandhavgarh National Park",
      coords: [23.5031, 81.0132],
      wildlife: ["Bengal Tiger", "Leopards", "Wild Boars", "Deer"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandhavgarh_National_Park_%28India%29.jpg",
        "https://media.istockphoto.com/photos/siberian-tiger-in-bandhavgarh-national-park-india-picture-id1151555638",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bandhavgarh_National_Park.jpg",
    },
    {
      name: "Periyar Wildlife Sanctuary",
      coords: [9.57, 77.08],
      wildlife: ["Elephants", "Tigers", "Nilgiri Tahr", "Indian Bison"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Periyar_Wildlife_Sanctuary_India.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_elephant_%28Elephas_maximus_indicus%29_at_Periyar_Wildlife_Sanctuary.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Periyar_Wildlife_Sanctuary_in_Kerala.jpg",
    },
    {
      name: "Kanha National Park",
      coords: [22.4723, 80.3797],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Barasingha", "Wild Boars"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kanha_National_Park_%28India%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Barasingha_%28Cervus_duvauceli%29_in_Kanha_National_Park.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Kanha_National_Park.jpg",
    },
    {
      name: "Tadoba Andhari Tiger Reserve",
      coords: [20.8581, 79.2625],
      wildlife: ["Tigers", "Leopards", "Sloth Bears", "Indian Wolves"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Tadoba_nature.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Tiger_in_Tadoba_Andhari.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tadoba_Andhari_Tiger_Reserve.jpg",
    },
    {
      name: "Nanda Devi National Park",
      coords: [30.3945, 79.9675],
      wildlife: ["Snow Leopard", "Himalayan Tahr", "Brown Bear"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nanda_Devi_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Snow_Leopard_-_Nanda_Devi_National_Park.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Nanda_Devi_National_Park_view.jpg",
    },
    {
      name: "Great Himalayan National Park",
      coords: [32.0108, 77.4872],
      wildlife: ["Western Tragopan", "Himalayan Monal", "Himalayan Tahr"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/4/46/Great_Himalayan_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Western_Tragopan.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Great_Himalayan_National_Park_banner.jpg",
    },
    {
      name: "Sariska Tiger Reserve",
      coords: [27.0878, 76.6167],
      wildlife: ["Royal Bengal Tiger", "Leopards", "Indian Wolf", "Nilgai"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Sariska_Tiger_Reserve.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sariska_Tiger_Reserve_tiger.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sariska_Tiger_Reserve_banner.jpg",
    },
    {
      name: "Gir National Park",
      coords: [21.1236, 70.3194],
      wildlife: ["Asiatic Lion", "Leopards", "Indian Gazelle", "Wild Boar"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Asiatic_Lion_in_Gir_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gir_National_Park_Lions.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Gir_National_Park_banner.jpg",
    },
    {
      name: "Manas National Park",
      coords: [26.6583, 91.0011],
      wildlife: ["Indian Rhino", "Pygmy Hog", "Golden Langur", "Bengal Tiger"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Manas_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/27/River_in_Manas_National_Park.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Manas_National_Park_Entrance.jpg",
    },
    {
      name: "Pench National Park",
      coords: [21.6492, 79.3188],
      wildlife: ["Bengal Tiger", "Leopards", "Indian Wolf", "Wild Dogs"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Pench_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Tiger_in_Pench_National_Park.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pench_National_Park_banner.jpg",
    },
    {
      name: "Anamalai Tiger Reserve",
      coords: [10.3665, 77.0015],
      wildlife: ["Tigers", "Leopards", "Indian Pangolin", "Nilgiri Langur"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/5/55/Anamalai_Tiger_Reserve.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Nilgiri_Langur.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/4/45/Anamalai_Tiger_Reserve_banner.jpg",
    },
    {
      name: "Dachigam National Park",
      coords: [34.0847, 74.9111],
      wildlife: ["Kashmir Stag", "Himalayan Black Bear", "Leopard", "Musk Deer"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dachigam_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Kashmir_Stag_in_Dachigam.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dachigam_National_Park_banner.jpg",
    },
    {
      name: "Bannerghatta National Park",
      coords: [12.8003, 77.5770],
      wildlife: ["White Tiger", "Indian Leopard", "Indian Elephant", "Sloth Bear"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Bannerghatta_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/White_Tiger_in_Bannerghatta.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Bannerghatta_National_Park_banner.jpg",
    },
    {
      name: "Silent Valley National Park",
      coords: [11.0784, 76.4572],
      wildlife: ["Lion-tailed Macaque", "Nilgiri Langur", "Indian Pangolin"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Silent_Valley_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Silent_Valley_Wildlife.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/9/92/Silent_Valley_National_Park_banner.jpg",
    },
    {
      name: "Valley of Flowers National Park",
      coords: [30.7280, 79.6051],
      wildlife: ["Snow Leopard", "Musk Deer", "Himalayan Monal"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Valley_of_Flowers_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Himalayan_Monal_in_Valley_of_Flowers.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Valley_of_Flowers_banner.jpg",
    },
    {
      name: "Keoladeo National Park",
      coords: [27.1591, 77.5217],
      wildlife: ["Siberian Crane", "Painted Stork", "Indian Python"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Keoladeo_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Siberian_Crane_in_Keoladeo.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Keoladeo_National_Park_banner.jpg",
    },
    {
      name: "Bhagwan Mahavir Wildlife Sanctuary",
      coords: [15.3384, 74.1755],
      wildlife: ["Indian Bison", "Leopard", "King Cobra"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Bhagwan_Mahavir_Wildlife_Sanctuary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/King_Cobra_in_Mahavir_Sanctuary.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bhagwan_Mahavir_Sanctuary_banner.jpg",
    },
    {
      name: "Mudumalai National Park",
      coords: [11.5671, 76.5546],
      wildlife: ["Indian Elephant", "Bengal Tiger", "Leopard", "Sloth Bear"],
      photos: [
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Mudumalai_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Elephants_in_Mudumalai.jpg",
      ],
      bannerImage: "https://upload.wikimedia.org/wikipedia/commons/d/db/Mudumalai_National_Park_banner.jpg",
    },
  ];
  
  export default locations;
    