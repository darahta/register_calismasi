import useApi from "../../hooks/useApi";
import { Fragment, useEffect, useState } from "react";
import Loading from "../loading";
import Box from "./box";

function Pagination(props) {
   console.log("Pakination props", props);
   const api = useApi();
   const [rows, setRows] = useState(null);

   //pagination states
   const [pageLength, setPageLength] = useState(6);
   const [pageStart, setPageStart] = useState(0);
   const [totalPageCount, setTotalPageCount] = useState(0);

   useEffect(() => {
      getRowsFromApi(pageLength, pageStart);
   }, []);
   useEffect(() => {
      getRowsFromApi(pageLength, pageStart);
   }, [pageLength, pageStart]);

   const getRowsFromApi = (length, start) => {
      api.get(props.remoteUrl, {
         params: { length, start },
      })
         .then((result) => {
            console.log(">>API RESULT", result);
            setRows(result.data.data);
            setTotalPageCount(
               Math.ceil(parseInt(result.data.recordsTotal) / pageLength)
            );

            //Toplam Satır sayısı:23
            // sayfa başına satır sayısı:6
            //toplam sayfa sayısı  yukarı yuvarlarız    math.ceil(23 / 6)=4
         })
         .catch((err) => {
            console.log(">>API HATASI", err);
         });
   };

   let rowArray = [];
   if (rows) {
      //kategori listesini componentlere ekle
      rows.map((item, index) => {
         rowArray.push(
            <Box
               key={index}
               id={item.id}
               name={item.name}
               href={`#/category/${item.slug}`}
               image={item.image}
            />
         );
      });
   } else {
      // loading ekleme göster
      rowArray.push(<Loading key="0" />);
   }

   const pageComponts = [];

   for (let i = 0; i < totalPageCount; i++) {
      pageComponts.push(
         <button
            onClick={() => setPageStart(i * pageLength)}
            key={i}
            className="btn btn-primary mx-2"
         >
            {i}
         </button>
      );
   }
   const lengthSelectComponents = [];
   for (let i = 0; i < 3; i++) {
      lengthSelectComponents.push(
         <button
            key={i}
            onClick={() => setPageLength((i + 1) * 3)}
            className="btn btn-primary mx-2"
         >
            {(i + 1) * 3}
         </button>
      );
   }

   return (
      <Fragment>
         <h2 className="display-6 text-center mb-4">{props.title}</h2>
         <div className="row mb-3 text-center">
            <div>
               Page Count: {totalPageCount}
               <br />
               <br /> &nbsp; Pages:{pageComponts}
               <br />
               <br />
               Rows: {lengthSelectComponents}
            </div>
         </div>
         <br />
         <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {rowArray}
         </div>
      </Fragment>
   );
}
export default Pagination;
