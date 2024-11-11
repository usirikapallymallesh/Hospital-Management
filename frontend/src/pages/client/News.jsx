import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import AllPagesHero from "../../components/AllPagesHero";
import newsPageBg from "../../assets/images/doctorPageBg.jpeg";
const News = () => {
  return (
    <DefaultLayout>
      <section>
        <AllPagesHero
          title="News"
          path="Home / News"
          ImgUrl={newsPageBg}
        />
      </section>
    </DefaultLayout>
  );
};

export default News;
