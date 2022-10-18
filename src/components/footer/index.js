import BootsrapFooter from "../../svg/bootsrap_footer_ımg.svg";
import FooterMenu from "./components/footer_menu";
import { connect, Connect } from "react-redux";

function Footer(props) {
   console.log(">>FOOTER PROPS", props);

   const aboutUsMenuContent = [
      {
         title: "Biz Kimiz",
         link: "#/about/who-we-are",
      },
      {
         title: "Vizyon",
         link: "#/about/vision",
      },
      {
         title: "Misyon",
         link: "#/about/mission",
      },
      {
         title: "İletişim",
         link: "#/about/contact",
      },
   ];
   const blogUsMenuContent = [
      {
         title: "Badana",
         link: "#/blogs/badana",
      },
      {
         title: "Dış Cephe Sıva",
         link: "#/blogs/Dış cephe sıva",
      },
      {
         title: "Elektrik Tesisatı",
         link: "#/blogs/Elektrik tesisatı",
      },
   ];

   const categoryMenu = [];
   if (props.categoriesState.initialized === true) {
      props.categoriesState.categories.map((item, index) => {
         if (index > 4) {
            return;
         }
         categoryMenu.push({
            title: item.name,
            link: "#/category/" + item.slug,
         });
      });
   }
   console.log(">>CATEGORİ MENUUU", categoryMenu);
   return (
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
         <div class="row">
            <div class="col-12 col-md">
               <img
                  class="mb-2"
                  src={BootsrapFooter}
                  alt=""
                  width="24"
                  height="19"
               />
               <small class="d-block mb-3 text-muted">© 2017–2021</small>
            </div>
            <FooterMenu title="Hakkımızda" menu={aboutUsMenuContent} />

            <FooterMenu
               title="Kategoriler"
               menu={categoryMenu}
               loading={!props.categoriesState.initialized}
            />

            <FooterMenu title="Bloglar" menu={blogUsMenuContent} />
         </div>
      </footer>
   );
}

const mapStateToProps = (state) => {
   return {
      categoriesState: state.categoriesState,
   };
};
export default connect(mapStateToProps)(Footer);
