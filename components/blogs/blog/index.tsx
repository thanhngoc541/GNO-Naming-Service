import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import HeaderTwo from "../../layout/headers/header-2";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Blog Page" title="Blog" />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;
