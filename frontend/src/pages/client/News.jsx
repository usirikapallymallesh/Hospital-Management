import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import newsPageBg from "../../assets/images/doctorPageBg.jpeg";
import Contact from "../../components/home/Contact";
const News = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="A passion for putting patients first."
          path="Home / News"
          ImgUrl={newsPageBg}
        />
      </section>
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2">
          <div className="mb-6 pl-20">
            <img src="gjhg"></img>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, accusantium totam. Nesciunt sint dolorum nam sit,
              earum culpa doloribus ex mollitia modi eos. Facere laborum labore
              quibusdam non sint sapiente! Magnam nostrum quisquam id maxime
              dicta facilis excepturi perferendis tempore cupiditate, atque amet
              labore rem dolor accusantium ab deserunt quas quia. Debitis,
              labore recusandae? Tempore, nesciunt! Eaque quasi esse recusandae?
              Qui autem omnis eius recusandae? Saepe, atque. Alias quasi tempore
              architecto? Maxime, molestiae porro? Ipsum quo consectetur
              reiciendis, expedita quisquam repellat architecto! Itaque illum
              impedit nobis eveniet eius, ullam quod. Odit vero molestiae rem
              quibusdam cum eligendi ab impedit? Cumque dolorum suscipit eius
              aperiam, minima facilis est dolores laborum molestias, debitis quo
              perspiciatis obcaecati quia eum alias veritatis ut harum. Atque
              laborum a omnis rerum magnam rssumenda omnis nobis minima, sed
              eius cupiditate nostrum quam possimus minus provident. Mollitia
              perferendis dolor animi error quod. Mollitia, perspiciatis nihil.
              Modi, est deleniti tempore nisi corrupti culpa veniam id inventore
              suscipit explicabo veritatis eaque reiciendis. Hic, provident
              laudantium architecto eveniet, non officia obcaecati modi illum,
              vel eaque dolorem ea ipsa? Vitae ad itaque facere minima quia.
              Modi rerum accusamus officiis, dolore sit provident ipsam porro!
              Quidem veniam explicabo praesentium, cumque dolor accusantium quam
              tenetur fugiat ab ratione, inventore similique rerum.
            </h1>
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div>
            <h1>hii</h1>
            <input
              type="text"
              placeholder="Search"
              className="border rounded w-full py-2 px-3 text-white bg-blue-900"
              required
            />
          </div>
          <div className="border-2 m-2">
            <h1>Recent Posts</h1>
          </div>
          <div className="border-2 m-2">
            <h1 className="text-2xl font-bold text-blue-900">Categories</h1>
          </div>
        </div>
      </div>
      <Contact />
    </DefaultLayout>
  );
};

export default News;
