// our-domain.com/
import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <React.Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-great'>NextJS is a great framework</Link>
        </li>
        <li>So is ReactJS</li>
      </ul>
    </React.Fragment>
  );
}

export default HomePage;
