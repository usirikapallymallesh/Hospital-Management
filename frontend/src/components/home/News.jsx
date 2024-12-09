import React from 'react';
import { Carousel } from 'antd';
import { FaEye, FaHeart } from 'react-icons/fa'; // Importing icons for views and likes
// import 'antd/dist/antd.css'; // Import Ant Design styles

const News = () => {
  const newsArticles = [
    {
      title: "Breaking News: Health Tips",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis vel neque rutrum facilisis. Nulla facilisi.",
      image: "https://via.placeholder.com/300",
      views: 68,
      likes: 89,
    },
    {
      title: "New Study on Nutrition",
      description: "Donec varius, orci at ultrices consectetur, mauris neque accumsan diam, id elementum neque ipsum eu turpis.",
      image: "https://via.placeholder.com/300",
      views: 45,
      likes: 72,
    },
    {
      title: "Exercise Benefits for Mental Health",
      description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      image: "https://via.placeholder.com/300",
      views: 120,
      likes: 95,
    },
    {
      title: "Understanding Diabetes",
      description: "Pellentesque in ipsum id orci porta dapibus.",
      image: "https://via.placeholder.com/300",
      views: 90,
      likes: 60,
    },
    {
      title: "Healthy Eating Habits",
      description: "Quisque placerat scelerisque tortor ornare ornare.",
      image: "https://via.placeholder.com/300",
      views: 30,
      likes: 45,
    },
  ];

  return (
    <div className="py-10 px-5 md:px-10 lg:px-20 bg-gray-50 pl-22">
      <h3 className="text-lg font-semibold  text-[#159EEC] text-center uppercase work-sans-color mb-2 ">Better information, Better health</h3>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2B6C] yeseva-one-regular">News</h1>

      <Carousel autoplay dots={false}>
        {/* Create slides with three articles each */}
        {[...Array(Math.ceil(newsArticles.length / 4))].map((_, slideIndex) => (
          <div key={slideIndex} className="grid grid-cols-2 grid-rows-2 ">
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              {newsArticles.slice(slideIndex * 4, slideIndex * 2 + 4).map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4  text-center flex gap-2 w-full">
                  <img src={article.image} alt={article.title} className="w-32 h-full rounded-md  mb-4" />
                  <div className='flex flex-col justify-center items-start'>
                  <h4 className="text-lg font-semibold">{article.title}</h4>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <div className="flex justify-center space-x-2">
                    <div className="flex items-center">
                      <FaEye className="text-gray-500" />
                      <span className="ml-1">{article.views}</span>
                    </div>
                    <div className="flex items-center">
                      <FaHeart className="text-red-500" />
                      <span className="ml-1">{article.likes}</span>
                    </div>
                  </div>

                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default News;