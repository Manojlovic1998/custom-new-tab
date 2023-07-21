import "./App.css";
import { Providers } from "./Providers";
import Heading from "./components/Heading";
import Card from "./components/Card";
import BookmarksTab from "./components/BookmarksTab";
import SearchTab from "./components/SearchTab";
import SearchForm from "./components/SearchForm";
import Image from "./components/Image";
import SettingsTab from "./components/SettingsTab";
import { StorageConsumer } from "./StorageContext";

function App() {
  return (
    <Providers>
      <StorageConsumer>
        {(value) => {
          return (
            <Card>
              <div className="image-wrapper">
                <Image alt="" className="image" src={value[0]} />
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
          );
        }}
      </StorageConsumer>
    </Providers>
  );
}

export default App;
