function FooterMenu(props) {
   console.log("FOOTER MENU PROPS", props);

   if (props.loading === true) {
      return (
         <div class="col-6 col-md">
            <img src="images/loading.gif" />
         </div>
      );
   }

   const footerMenu = props.menu.map((item, index, arr) => {
      console.log("FOOTER MENÜ İTEM", item);

      return (
         <li class="mb-1" key={index}>
            <a class="link-secondary text-decoration-none" href={item.link}>
               {item.title}
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
