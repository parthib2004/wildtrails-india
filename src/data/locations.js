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
  ];
  
  export default locations;
    