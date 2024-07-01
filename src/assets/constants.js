import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

// export const genres = [
//   { title: 'Pop', value: 'POP' },
//   { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
//   { title: 'Dance', value: 'DANCE' },
//   { title: 'Electronic', value: 'ELECTRONIC' },
//   { title: 'Soul', value: 'SOUL_RNB' },
//   { title: 'Alternative', value: 'ALTERNATIVE' },
//   { title: 'Rock', value: 'ROCK' },
//   { title: 'Latin', value: 'LATIN' },
//   { title: 'Film', value: 'FILM_TV' },
//   { title: 'Country', value: 'COUNTRY' },
//   { title: 'Worldwide', value: 'WORLDWIDE' },
//   { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
//   { title: 'House', value: 'HOUSE' },
//   { title: 'K-Pop', value: 'K_POP' },
// ];

export const genres = [
  { title: "Bollywood", value: "BOLLYWOOD" },
  { title: "Indian Pop", value: "INDIAN_POP" },
  { title: "Bhangra", value: "BHANGRA" },
  { title: "Film", value: "FILM_TV" }, // Keep the existing Film genre
  { title: "Devotional", value: "DEVOTIONAL" },
  { title: "Folk", value: "FOLK" },
  { title: "Carnatic", value: "CARNATIC" },
  { title: "Hindustani", value: "HINDUSTANI" },
  { title: "Bengali", value: "BENGALI" },
  { title: "Independent", value: "INDEPENDENT" },
  { title: "Regional", value: "REGIONAL" },
];

export const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

export const indianSongs = [
  {
    title: "TU HAI TOH",
    subtitle: "Tanishk Bagchi, Kausar Munir",
    key: "10000",
    images: {
      coverart:
        "data:image/jpeg;base64,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",
    },
  },
  {
    title: "Naatu Naatu",
    subtitle: "Rahul Sipligunj, Kaala Bhairava",
    key: "10001",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273f83c2d7e01bdf4443b881532",
    },
  },
  {
    title: "Angaaron",
    subtitle: "Shreya Ghoshal",
    key: "10005",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273b3b485c05c0c8a4893612544",
    },
  },
  {
    title: "Shayad",
    subtitle: "Arijit Singh",
    key: "10003",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2735ce250ed772675c347a34f64",
    },
  },
  {
    title: "Ranjha",
    subtitle: "B Praak, Jasleen Royal",
    key: "10002",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b27309426d9ae9d8d981735ebc5e",
    },
  },
  {
    title: "Raataan Lambiyan",
    subtitle: "Jubin Nautiyal, Asees Kaur",
    key: "10004",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01",
    },
  },
  {
    title: "Vaaste",
    subtitle: "Dhvani Bhanushali, Nikhil D’Souza",
    key: "10006",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273b5e6c9ce5bb77c1607780315",
    },
  },
  {
    title: "Ghungroo",
    subtitle: "Arijit Singh, Shilpa Rao",
    key: "10008",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273281650a8e8c5d04658d31ac1",
    },
  },
  {
    title: "Param Sundari",
    subtitle: "Shreya Ghoshal",
    key: "10009",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2731c7bfe8d9d66076ac648c4a1",
    },
  },
  {
    title: "Lut Gaye",
    subtitle: "Jubin Nautiyal",
    key: "10010",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2738634403946cb8f08b83e4c40",
    },
  },
  {
    title: "Dil Galti Kar Baitha Hai",
    subtitle: "Jubin Nautiyal",
    key: "10011",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2739a0cfca9e6c069d1a53b962b",
    },
  },
  {
    title: "Bekhayali",
    subtitle: "Sachet Tandon",
    key: "10012",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273bbc280510fa8d8c4e30f3b19",
    },
  },

  {
    title: "Tum Hi Aana",
    subtitle: "Jubin Nautiyal",
    key: "10014",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2736539071e0f1833190a491d4d",
    },
  },
  {
    title: "Filhall",
    subtitle: "B Praak, Akshay Kumar, Nupur Sanon",
    key: "10015",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2735c8aaa76db3df1cf7b5610f5",
    },
  },
  {
    title: "Duniyaa",
    subtitle: "Akhil, Dhvani Bhanushali",
    key: "10016",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2737b93fd8b0ade33ceb9d536de",
    },
  },
  {
    title: "Tera Hone Laga Hoon",
    subtitle: "Atif Aslam, Alisha Chinai",
    key: "10017",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273e23347d1b3a9da365c1addfc",
    },
  },
  {
    title: "Tum Se Hi",
    subtitle: "Mohit Chauhan",
    key: "10018",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b27352fe6875028c892308ffc2f7",
    },
  },
];

export const topPlayData = [
  {
    title: "Naatu Naatu",
    subtitle: "Rahul Sipligunj, Kaala Bhairava",
    key: "10001",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273f83c2d7e01bdf4443b881532",
      background:
        "https://i.scdn.co/image/ab67616d00001e023b517b3d9edcea064e1818d4",
    },
    artists: [
      {
        adamid: "123",
        name: "Rahul Sipligunj",
      },
    ],
  },
  {
    title: "Ranjha",
    subtitle: "B Praak, Jasleen Royal",
    key: "10002",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b27309426d9ae9d8d981735ebc5e",
      background:
        "https://i.scdn.co/image/ab6761610000e5eb1085c393173d6a0826610e98",
    },
    artists: [
      {
        adamid: "124",
        name: "B Praak",
      },
    ],
  },
  {
    title: "Shayad",
    subtitle: "Arijit Singh",
    key: "10003",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b2735ce250ed772675c347a34f64",
      background:
        "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
    },
    artists: [
      {
        adamid: "125",
        name: "Arijit Singh",
      },
    ],
  },
  {
    title: "Raataan Lambiyan",
    subtitle: "Jubin Nautiyal, Asees Kaur",
    key: "10004",
    images: {
      coverart:
        "https://i.scdn.co/image/ab67616d0000b273a75c2f26913099a420050f01",
      background:
        "https://i.scdn.co/image/ab6761610000e5ebc58e9665446297c3be1a0ae0",
    },
    artists: [
      {
        adamid: "126",
        name: "Jubin Nautiyal",
      },
    ],
  },
  // {
  // 	title: 'Angaaron',
  // 	subtitle: 'Shreya Ghoshal',
  // 	key: '10005',
  // 	images: {
  // 		coverart:
  // 			'https://i.scdn.co/image/ab67616d0000b273b3b485c05c0c8a4893612544',
  // 		background:
  // 			'https://i.scdn.co/image/ab6761610000e5eb36a7262247318ff0f1ad00da',
  // 	},
  // 	artists: [
  // 		{
  // 			adamid: '127',
  // 			name: 'Shreya Ghoshal',
  // 		},
  // 	],
  // },
  // {
  // 	title: 'Vaaste',
  // 	subtitle: 'Dhvani Bhanushali, Nikhil D’Souza',
  // 	key: '10006',
  // 	images: {
  // 		coverart:
  // 			'https://i.scdn.co/image/ab67616d0000b273b5e6c9ce5bb77c1607780315',
  // 		background:
  // 			'https://i.scdn.co/image/ab6761610000e5eb474e22bd75615c1a0b3a8530',
  // 	},
  // 	artists: [
  // 		{
  // 			adamid: '128',
  // 			name: 'Dhvani Bhanushali',
  // 		},
  // 	],
  // },
  // {
  // 	title: 'Ghungroo',
  // 	subtitle: 'Arijit Singh, Shilpa Rao',
  // 	key: '10008',
  // 	images: {
  // 		coverart:
  // 			'https://i.scdn.co/image/ab67616d0000b273281650a8e8c5d04658d31ac1',
  // 		background:
  // 			'https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3',
  // 	},
  // 	artists: [
  // 		{
  // 			adamid: '129',
  // 			name: 'Arijit Singh',
  // 		},
  // 	],
  // },
];
