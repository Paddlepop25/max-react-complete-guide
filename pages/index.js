import React from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const mongodb_db = process.env.MONGODB_DB;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_pw = process.env.MONGODB_PW;

function HomePage(props) {
  // HEAD is for SEO. search engine can see our content and display say in googles
  // props is data from below getStaticProps
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
}

/* only be used in components in pages folder
   has to be called getStaticProps for NextJS to use for pre-rendering
   if its here, NextJS won't render component first, will run this to get data first
   This is for SEO - search engine optimisation
   below is to get data / props for component
*/
export async function getStaticProps() {
  /* code in here will not run on client side, so can connect to database or write server code
     this code is executed during build process, not on server and not on client side
     always need to return object with props property
     revalidate will unlock a feature called 'Incremental Static Generation'
     it will wait for the specified number of seconds before it regenrates the page for incoming request
  */

  const client = await MongoClient.connect(
    `mongodb+srv://${mongodb_user}:${mongodb_pw}@cluster0.mg1xb.mongodb.net/${mongodb_db}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection(mongodb_db);

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1, // regenerates every specified second on server to see if got new data
  };
}

/* only use this is you have data that changes every second, if you need request and response (like for authentication)
   because page not cached and regenerates at every request on server so getStaticProps may be better
   alternative to getStaticProps
   getServerSideProps is reserved name
   this function will not run on build but always on server after deployment
*/
// export async function getServerSideProps(context) {
//   const request = context.req;
//   const response = context.res;

//   /* fetch data from an API
//      any code written will run on server, not on client
//      so can use code with credentials etc
//   */
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A first meetup',
//     image:
//       'https://media.cntraveler.com/photos/5cdc6ee7a6a5c4323b2f0b02/master/pass/Changi-Jewel_Lester-Ledesma__1220574.jpg',
//     address: '123 Main Street',
//     description: 'This is a first meetup',
//   },
//   {
//     id: 'm2',
//     title: 'Python meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/7/7e/HK_Chater_Road_LegCo_view.jpg',
//     address: 'Jalan Laksamana',
//     description: 'This is a 2nd meetup',
//   },
//   {
//     id: 'm3',
//     title: 'See you in HK',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cave_26%2C_Ajanta.jpg/2560px-Cave_26%2C_Ajanta.jpg',
//     address: '482 Block Harrison',
//     description: 'Holiday!!',
//   },
// ];
