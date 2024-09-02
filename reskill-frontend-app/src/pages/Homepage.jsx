// eslint-disable-next-line no-unused-vars
import ArticleTitle from '../components/ArticleTitle';
import Nav from '../components/Nav';
import RelatedAP from '../components/RelatedAP';
//import IndexPage from '../components/IndexPage';
import NavigationSP from '../components/NavigationSP';


function Homepage() {

  return (
    <div>
      <Nav/>
      <ArticleTitle />
      <RelatedAP />
      <div className="pt-196px]">
        <NavigationSP />
      </div>
    </div>
  );
}

export default Homepage;