import React from 'react';
import Banner from './Banner';
import Card from './Card';
function Home() {
  return (
    <section className='home-section'>
      {/* Banner */}
      <Banner></Banner>

      {/* Cards */}
      <section className='cards-section'>
        <Card
          src='https://jardinage.lemonde.fr/images/dossiers/2018-02/home-staging-081520.jpg'
          title='Comfortable'
          description='Comfortable private places, with room for friends or family.'
        ></Card>
        <Card
          src='https://cdn.homedit.com/wp-content/uploads/2012/12/living-room-winte-view.jpg'
          title='Modern'
          description='Spaces that are more than just a place to sleep.'
        ></Card>
        <Card
          src='https://www.shuttledirect.com/blog/wp-content/uploads/2019/04/Seoul-817x350.jpg'
          title='Explore'
          description='Find the best views around.'
        ></Card>
      </section>
    </section>
  );
}

export default Home;
