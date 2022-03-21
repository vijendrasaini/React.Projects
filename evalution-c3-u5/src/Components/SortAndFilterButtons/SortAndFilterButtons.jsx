export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button onClick={()=>{handleSort("title","asc")}} className="sortByTitleAsc" >sort title in Ascending order</button>
      <button onClick={()=>{handleSort("title","des")}} className="sortByTitleDesc" >sort title in Descending order</button>
      <button onClick={()=>{handleSort("price","asc")}} className="sortByPriceAsc" >sort price asending order</button>
      <button onClick={()=>{handleSort("price","des")}} className="sortByPriceDesc" >sort price descending order</button>
    </div>
  );
};
