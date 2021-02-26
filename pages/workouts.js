import React from "react";
import * as Contentful from "contentful";
import { useState, useEffect } from "react";

const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "workouts",
        order: "-sys.createdAt",
      })
      .then((response) => {
        setWorkouts(response.items);
        console.log(response.items);
      });
  }, []);

  return (
    <div>
      <h1>{workouts}</h1>
    </div>
  );
}
