import Footer from "./footerComp/Footer";
import Header from "./headerComp/Header";

export default function Layout(props) {
  return (
    <>
      <Header page={props.page} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
