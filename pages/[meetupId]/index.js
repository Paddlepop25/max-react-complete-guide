import React from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const mongodb_db = process.env.MONGODB_DB;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_pw = process.env.MONGODB_PW;

function MeetupId(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </React.Fragment>
  );
}

/**
 * getStaticPaths, getServerSideProps, getStaticProps allow us to
 * fetch data to pre-render our pages with the data (props)
 * for better SEO.
 */

// MUST EXPORT THIS if using getStaticProps, if not will get error
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${mongodb_user}:${mongodb_pw}@cluster0.mg1xb.mongodb.net/${mongodb_db}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection(mongodb_db);

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking', // indicate if have all paths here or want to pre-generate some paths
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

/* for context in getStaticProps, it will not hold request and response,
   but it will hold params
*/
export async function getStaticProps(context) {
  // fetch data for a single meetup
  // our identifier between the square brackets [meetupId] will be properties and values are from url
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://${mongodb_user}:${mongodb_pw}@cluster0.mg1xb.mongodb.net/${mongodb_db}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection(mongodb_db);

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupId;
