
import textutils from "../images/textutils.png";
import News from "../images/NewsApp.png";
import item from "../images/Inventory.png";
import notes from "../images/notebook.png";
import AI from "../images/chatbot.png";
import Question from "../images/Virtual.png";


export const Bio = {
  name: "Shayan Ashraf",
  roles: [
    "Software Engineer",
    "Programmer",
  ],
  description:
    "I am a driven and adaptable individual, enthusiastic about embracing new challenges. Passionate about learning, I am committed to delivering exceptional results. With a positive outlook and a growth-oriented mindset, I am prepared to contribute meaningfully and accomplish remarkable goals.",
  github: "https://github.com/Shayan757",
  gmail: "shayanashraf295@gmail.com",
  facebook: "https://www.facebook.com/itx.shayan.33",
  // instagram: "https://www.instagram.com/shayanashraf15",
  resume:
    "https://drive.google.com/file/d/1BKF_0wDSOy8lEUbHrUt-tmmJnFF_kB5i/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/shayanashraf2",

};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next JS",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAeFBMVEUAAAD///+Dg4PY2NgvLy9RUVErKyuIiIj8/PyysrLh4eGOjo5ra2s3Nzf5+flFRUVlZWVycnKmpqadnZ3p6ekUFBR6enoZGRnLy8s+Pj4sLCzx8fEmJiZMTEzPz88ICAjExMSwsLBcXFy7u7ugoKCWlpYeHh5YWFgRguI2AAAEjElEQVR4nO3ZaUPiOhiG4VARFKSyL4Isg47//x+eLkla2qwcp3y5ry8zlBDzdHmbpkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgdwzGw9LA2Ww1TDw2suU0WeeStbmjWWn9XH7c+Lr1jCvSc096cjbr93wmzQ6/Tf3M1be70H6f/0na3tXVbBCcVrypLdN2N2v13Y/c0E8flLY3/J20+vilH81edqrxWG15XFq9w/9nWrGVm5aNTjZ7+UV1Gj0wbbqxNotKK1Sq820nT3LzqNrUf3lY2vowzGmXT1b9WuuJyrCo93Ex7NTBTR9yL9U3jd7/WVp7pZJpXZd2nalS6Qr1x/qzcn+8hI49nkyrDsbY0mzg/rpl0TrB39UWxx577SjtWF1qlkoVm7ZVqVbtCtXWVdpE7fr0YGwWnVYsZYfH8qOqUM5JTFdphyKRwzFXqvi0E3XmFpXqonbmX9dvuksr/1TrtlGKT1tVqpkQQ/V/xy1ddJpWn2ymSHekrSrVR0iFynWZVhcSwwT3nrTiLPtbqo5fPT/oMq34lIN6aVequ9LqSiW5H7NEx2kdlUqmfZ2+tRlOBel2XpiefIPpNq24yIGdm81c8+S9vfe3ejv/jLfjtLpSNR/FXWmbjzp131WzxD+YrtPaKtW9aXWl6l0CBtN12mo6e1up7k4rRrLVMWAwnafVjyq3Ge68bvNfqko19w+m+7TiIke3rTeTafcjA89Rm6q9YlmFrPGmnaobwGQ4/0rMU3qXdlpxlKOrV6rI51s1uOIE0ZVq52vvTSu/nMghXr33tAZDWl2p3qptd80uDmnvnP+rKtV+5fmBN21aXDaDfDErza8Q+2KLmSFttTRYLRrelTYvUAv1n5xvMhWYNjuy2+ws/lxGT+5MaQ2V6p60V32CHAIrVWDa7NAWn3YBk9FbxrR6SVhXqjvSqss1X0b7o84W9xQjLO1GpRWnU+SFa06rK5VaNIxPqwMWpXisPjkrVeCxzc7grXNVwMqSVj++zMqP0Wk/GifvVX7c29esg9MW97TRZerqysyWVleqcp04Om1rChVSqQLTZne2omEaMGG5ZUsrZnJ0y+LSiE2rbzp6y0odbMcjfWja7DqZj/L+9r9z3YpGpYqcXegJRW2lP6BShafNh5TsPS8m2+xpdaXKz5e490D1BbiKXoqzPugGpE2zSrySs5RVL/8Yw5H2VKtUUWltt1ddqWxzKmvaz8UinyCfimObpKmc1Dpf1EWmrV6c7+LSNhbOK75KZUp7+JoWV0H+m3VxXf2oV8Nj39NmVFpdqfbiEJFWvRRpPwlu1NtaS6UypR3lr8myg9o7Jou0XGV4ytqcvxf5Oov/uSo8rfhSR2kVnlYvIxsmEj/qO/PfM6TNd9Cwemycqz1Q/xhO/n3brUVVKr3gYqWy6ReXM1N/ulIZFyrlhX2zLVme839211G63KqnsvVxmaaja/Sb7NPgkBlYn8X6pUnfR9353iXLFHGimL78W3YVmwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMf5D+CTNGY7cUYoAAAAAElFTkSuQmCC",
      },
     
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "Shadcn UI",
        image:
          "https://devio2024-media.developers.io/image/upload/v1728916104/user-gen-eyecatch/kdto5ze9dbln9agt6wsh.webp",
      },
   
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
        "https://externlabs.com/blogs/wp-content/uploads/2021/11/ExpressJS-Library.jpg"
      },
  

      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },

      {
        name: "MySQL",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9JL2hQz-EKoPHG_HksoKlY9Eg9Orf9bCg&s",
      },

      {
        name: "RestAPI",
        image:
          "https://media.licdn.com/dms/image/v2/D4D12AQEeNNHq05k7MA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687786979245?e=2147483647&v=beta&t=gatszJ18T6cgUmXRbQWWQhxNGjpH7RLqvLLGnDYJbYE",
      },

      {
        name: "GraphQLAPI",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAt3c3IyQQ4ciJLsNIGKKouvF00KoDbXTAg&s",
      },

      {
        name: "JWT Authentication",
        image:
          "https://ik.imagekit.io/ably/ghost/prod/2019/05/Screenshot-2019-05-14-at-13.53.46.png?tr=w-1728,q-50",
      },

      {
        name: "Bcrypt",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQom27qT1ZJntrrH_bykfTYe34kxLcTnEdZsw&s",
      },

      {
        name: "oAuth",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkMhYaH3Q0V73BeArMr_BeqdaJOecHTdgIg&s",
      },

      {
        name: "Problem Solving",
        image:
          "https://lizkislik.com/wp-content/uploads/2015/11/problem-solving-tips-team.jpg",
      },

      {
        name: "Database Optimization",
        image:
          "https://shalb.com/wp-content/uploads/2019/04/Database-Optimization-1.jpg",
      },

      {
        name: "Swagger",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mQcgSLaiDLjoEZFJdrvcibXq7EHpW2D3qA&s",
      },

      {
        name: "Redis",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxp0HsuAPKN8ehIniFqMHwaiII90EZcILBg&s",
      },
      

    ],

    
  },

  {
    title: "Others",
    skills: [
      
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },

      {
        name: "Postman",
        image:
          "https://yt3.googleusercontent.com/XRzDTgEa9GybH_Uk21E9ri6_iYh-9gbyZzhiEBCnLjISgjTorjMiu7IwpChUMf2lLpEdX6ufDA=s900-c-k-c0x00ffffff-no-rj",
      },


      

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQG3G8GlNZvByw/company-logo_200_200/company-logo_200_200/0/1630453717890/coderatory_logo?e=1744243200&v=beta&t=_3fP03FDXiW9LblwuWKTwgleMOh1Ma6xYkxmU4mBMO8",
    role: "MERN Stack Intern",
    company: "Coderatory",
    date: "May 2024 - Sep 2024",
    desc: "Developed RESTful APIs using Node.js and Express.js, optimizing performance and scalability. Designed and maintained web applications using React.js, Next.js, and Node.js. Implemented a match pooling algorithm for Muntazim, enhancing backend efficiency. Built a file upload and retrieval system using Multer, Node.js, and MongoDB, enabling users to upload and retrieve up to 10 files per lead ID. Integrated Puppeteer for LinkedIn scraping, automating lead data extraction. Collaborated on MongoDB schema design, optimizing queries for faster response times.",
    skills: [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "API Integration",
      "Shadcn UI"
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },
  {
    id: 5,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQGFXdOQI7ypNA/company-logo_200_200/company-logo_200_200/0/1695638807285/turn_up_tech_logo?e=1744243200&v=beta&t=xO8i4p5Pn0ZAthFhwfXK9AXXL_YMD7DwFTX12LBM3nQ",
    role: "MERN Stack Intern ",
    company: "Turn Up Technologies",
    date: "nov 24 - feb 25",
    desc: "Developed an AI chatbot backend using Next.js, integrating the Gemini API. Implemented database caching strategies in MongoDB to optimize query performance. Designed authentication and session management for secure user access in The Trade Core product. Created backend endpoints to handle real-time AI-generated responses efficiently.",
    skills: [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "API Integration",
      "Shadcn UI"
    ],
  },

  {
    id: 4,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQGFXdOQI7ypNA/company-logo_200_200/company-logo_200_200/0/1695638807285/turn_up_tech_logo?e=1744243200&v=beta&t=xO8i4p5Pn0ZAthFhwfXK9AXXL_YMD7DwFTX12LBM3nQ",
    role: "Backend Developer ",
    company: "ExPERRTS",
    date: "april 25 - present",
    desc: "I contributed as a Backend Developer to the EXPERTTS platform, a global knowledge-sharing marketplace that enables users to monetize their expertise. I designed and implemented over 10 RESTful APIs, including Apple Authentication, expert availability management, team permissions for organizations, and feedback systems for booked services.I integrated Redis for efficient caching and faster API responses, and utilized Swagger (OpenAPI) to document all APIs for improved collaboration with frontend teams and streamlined testing.",
    skills: [
      
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Swagger",
      "Redis"
      
    ],
  },
];

export const education = [

  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJP8EDTIQqf1seqDk63t2kYPwEWrf1lPpDA&s",
    school: "Kids R Us School",
    date: "2006 - 2017",
    grade: "A",
    degree: "Matriculation SSC (Science)",
  },
  {
    id: 0,
    img: "https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-6/305844668_581063213716339_8535998538332173104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KhU0j2SVZ7sQ7kNvgHoix62&_nc_oc=AdiCEnKTFDhYyitmQ2wWJeDzsbmotRQVtiuS3aHx0yaYDHSLHHC9mNlD5yFuYIlTZdg&_nc_zt=23&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=A6VgkbsWe9loY16Qk9SttBy&oh=00_AYCTmBrcL0NIZTUxk8sdEdBT55hlA30VWG-PMJde_ScYog&oe=6784AA7D",
    school: "Government Degree Science College, Malir",
    date: "2018 - 2020",
    grade: "C",
    degree: "Intermediate in Pre-Engineering",
  },
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQE4u0dT2bemIg/company-logo_200_200/company-logo_200_200/0/1663664045761/virtual_university_of_pakistan_logo?e=1744243200&v=beta&t=TO55qSnSrrZqiF6oB85GROetyVLh20mvI7swSBBgnKs",
    school: "Virtual University of Pakistan",
    date: "2021 - 2025",
    grade: "B",
    degree: "Bachelor's in Computer Science",
  },
];

export const projects = [
  {
    id: 11,
    title: "TextUtils",
    description:
      "TextUtils is a free React.js app that analyzes text quickly and efficiently, offering features like word and character count, suitable for various writing needs across web browsers ",
    image: textutils,
    tags: [
      "React JS",
      "CSS",
      "Javascript",
      
    ],
    category: "web app",
    github: "https://github.com/Shayan757/TextUtils",
    webapp: "https://github.com/Shayan757",
  },
  {
    id: 12,
    title: "AI Chatbot",
    description:
      "This is an AI Chatbot in Next JS",
    image: AI,
    tags: [
      "Next JS",
      "Tailwind CSS",
      "Javascript",
      "Gemini Api,"
     
    ],
    category: "web app",
    github: "https://github.com/Shayan757/Chatbot",
    webapp: "https://github.com/Shayan757",
  },
  {
    id: 9,
    title: "News",
    description:
      "Stay informed and connected with our News App, delivering breaking headlines and in-depth coverage across various topics, ensuring you're always up-to-date with the latest stories from around the globe.",
    image: News,
    tags: [
      "React JS",
      "CSS",
      "JavaScript",
  
    ],
    category: "web app",
    github: "https://github.com/Shayan757/News-React-App",
    webapp: "https://github.com/Shayan757",
  },

  {
    id: 13,
    title: "Inventory Item Management",
    description:
      "This is Inventory Item Management MERN App where candidate can add items,updatem items,delete items and scheduled their items too. ",
    image: item,
    tags: [
      "Next JS",
      "Tailwind CSS",
      "Shadcn UI",
      "Javascript",
      "MongoDB",
      "Express JS",
      "Node JS",
     
    ],
    category: "web app",
    github: "https://github.com/Shayan757/Item-Management",
    webapp: "https://github.com/Shayan757",
  },

  {
    id: 13,
    title: "Middleman",
    description:
      "A SaaS platform for real estate professionals to generate leads, manageclient relationships, and streamline property sales through powerful marketing and CRM tools.",

    image: item,
    tags: [
      "Next JS",
      "Tailwind CSS",
      "Shadcn UI",
      "Javascript",
      "MongoDB",
      "Express JS",
      "Node JS",
     
    ],
    category: "web app",
    github: "https://github.com/aliwariss/Middlemen",
    webapp: "https://github.com/Shayan757",
  },

  {
    id: 0,
    title: "Inotebook",
    description:
      "This is notebook MERN app and it is designed for creating, organizing, and managing digital notes, documents, and other forms of information. This app offer a convenient way to take notes, make to-do lists, store information, and stay organized.",
    image: notes,
    tags: ["React JS", "Javascript", "CSS3", "Bootstrap", "Mongodb", "Node JS", "Express JS"],
    category: "web app",
    github: "https://github.com/Shayan757/iNotebook-React",
    webapp: "https://github.com/Shayan757",
  },

  {
    id: 4,
    title: "Virtual Question Bank System",
    description:
      "The Virtual Question Bank System offers a comprehensive solution to streamline the examination preparation process for students and educators with the aims to enhance learning outcomes and academic performance. The Virtual Question Bank System is designed to provide a user-friendly platform for students to prepare comprehensively for their midterm and final term examinations. The system facilitates the storage, organization, and retrieval of multiple-choice questions (MCQs) and descriptive questions across various subjects. Administrators can efficiently manage question banks i.e input, manage, and organize exam questions, while users can view and practice these questions to enhance their exam preparation and self-assessment.",
    image: Question,
    tags: ["Next JS", "Javascript", "Tailwind CSS", "Shadcn UI", "Mongodb", "Node JS", "Express JS"],
    category: "web app",
    github: "https://github.com/Shayan757/Virtual-Question-Bank-System-copy-",
    webapp: "https://github.com/Shayan757",
  },
  
];

