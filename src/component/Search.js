import React from "react";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats
} from "react-instantsearch-dom";
const searchClient = algoliasearch(
  "X0CHKXDR56",
  "ae9103d10e61e753401f9d3f3f177c54"
);

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="12">
      <SearchBox/>
      <div className="stats">
        {" "}
        <Stats />{" "}
      </div>
      <Hits hitComponent={Hit}/>
    </InstantSearch>
  );
}

const Hit =({hit}) =>
<div>
  <img src={hit.image}/>
  <h3>{hit.name}</h3>
  <br/>
</div>

export default Search;
