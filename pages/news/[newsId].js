import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to backend API to fetch news with newsId
  console.log(newsId); // will log what is xxxxx (after /news/xxxxx)
  return <h1>The Details Page</h1>;
}

export default DetailPage;
