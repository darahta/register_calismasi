function FooterMenu(props) {
   console.log("FOOTER MENU PROPS", props);

   const footerMenu = props.menu.map((item, index) => {
      console.log("FOOTER MENÜ İTEM", item);

      return (
         <li class="mb-1" key={index}>
            <a class="link-secondary text-decoration-none" href="#">
               {item}
            </a>
         </li>
      );
   });
   return (
      <div class="col-6 col-md">
         <h5>{props.title}</h5>
         <ul class="list-unstyled text-small">{footerMenu}</ul>
      </div>
   );
}

export default FooterMenu;
