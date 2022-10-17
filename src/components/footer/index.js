import BootsrapFooter from "../../svg/bootsrap_footer_ımg.svg";
import FooterMenu from "./components/footer_menu";
function Footer() {
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
            <FooterMenu
               title="Hakkımızda"
               menu={["Biz Kimiz", "Vizyon", "Misyon", "İletişim"]}
            />
            <FooterMenu
               title="Kategoriler"
               menu={["Boyama", "Tadilat", "Elektrik/Elektronik"]}
            />
            <FooterMenu
               title="Servisler"
               menu={["Badana", "Dış çephe", "Elektrik Tesisatı"]}
            />
         </div>
      </footer>
   );
}

export default Footer;
