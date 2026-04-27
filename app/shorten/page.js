"use client";
import React, { useState } from "react";
import Link from "next/link";
const page = () => {
  const [url, setURL] = useState("");
  const [shortUrl, setShortURL] = useState("");
  const [generated, setGenerated] = useState("");
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setURL("");
        setShortURL("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 ">
      <h1 className="font-bold text-2xl">Generate Your shorten URL</h1>
      <div className="flex flex-col gap-5">
        <input
          onChange={(e) => setURL(e.target.value)}
          className="w-sm px-4 py-1 focus:outline-purple-600 rounded-xl"
          type="text"
          value={url}
          placeholder="Enter your URL"
        />
        <input
          onChange={(e) => setShortURL(e.target.value)}
          className="w-sm px-4 py-1 focus:outline-purple-600 rounded-xl"
          type="text"
          value={shortUrl}
          placeholder="Enter preferred Short URL"
        />
        <button
          className="text-white bg-linear-to-br from-purple-400 to-purple-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-base text-sm px-4 py-2 text-center leading-5 rounded-2xl font-bold"
          onClick={() => generate()}
        >
          Generate
        </button>
      </div>
      {generated && (
        <>
          <span className="font-bold text-lg">Your Link:</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default page;
