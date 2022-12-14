import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import useApi from "../../hooks/useApi";
import CategoryBox from "./components/category_box";
import Pagination from "../../components/pagination";

function Home() {
   const api = useApi();

   const [categories, setCategoires] = useState(null);

   //pagination states
   const [pageLength, setPageLength] = useState(6);
   const [pageStart, setPageStart] = useState(0);
   const [totalPageCount, setTotalPageCount] = useState(0);

   useEffect(() => {
      getCategoryPage(pageLength, pageStart);
   }, []);
   useEffect(() => {
      getCategoryPage(pageLength, pageStart);
   }, [pageLength, pageStart]);

   const getCategoryPage = (length, start) => {
      api.get("/public/categories/listMainCategories", {
         params: { length, start },
      })
         .then((result) => {
            console.log(">>API RESULT", result);
            setCategoires(result.data.data);
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

   let categoryArray = [];
   if (categories) {
      //kategori listesini componentlere ekle
      categories.map((item, index) => {
         categoryArray.push(
            <CategoryBox
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
      categoryArray.push(<Loading key="0" />);
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
      <main>
         <Pagination
            remoteUrl="/public/categories/listMainCategories"
            title="Categories"
         />

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
            {categoryArray}
         </div>

         <h2 className="display-6 text-center mb-4">Blogs</h2>

         <div className="table-responsive">Buraya Bloglar Gelsin</div>
      </main>
   );
}

export default Home;
