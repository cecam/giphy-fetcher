import { useState } from "react";
import SearchForm from "./components/SearchForm";

import GiphPage from "./pages/GiffPage";

function App() {
  const [ searchText, setSearchText ] = useState('')

  return (
    <div className="min-h-screen w-full grid place-items-center">
      <h1 className="text-3xl font-bold text-center mb-8">My giff galery</h1>
      <SearchForm text={searchText} setText={setSearchText} />
      <GiphPage text={searchText} />
    </div>
  );
}

export default App;
