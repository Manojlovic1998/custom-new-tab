import React from "react";
import "./App.css";
import { Providers } from "./Providers";
import Heading from "./components/Heading";
import Card from "./components/Card";
import BookmarksTab from "./components/BookmarksTab";
import SearchTab from "./components/SearchTab";
import SearchForm from "./components/SearchForm";
import Image from "./components/Image";
import SettingsTab from "./components/SettingsTab";

function App() {
  return (
    <Providers>
      <Card>
        <div className="image-wrapper">
          <Image
            alt=""
            className="image"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzA0YWc5czVob3d4cjFvcnc0MXV1aG01d3Bqbm94ZWZuNjNwdjM5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/84SFZf1BKgzeny1WxQ/giphy.gif"
          />
        </div>
        <main>
          <Heading>Happy Hacking!</Heading>
          <SearchTab>
            <SearchForm />
          </SearchTab>
          {/* <!-- Bookmarks will get inserted here! --> */}
          <BookmarksTab />
        </main>
        <SettingsTab />
      </Card>
    </Providers>
  );
}

export default App;
