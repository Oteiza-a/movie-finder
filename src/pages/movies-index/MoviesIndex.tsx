import Layout from "../../components/layout/Layout";
import NavigationBar from "../../components/nav-bar/NavigationBar";
import { NavBarOption } from "../../interfaces/NavBarOption";

const MoviesIndex = (): JSX.Element => {

  const navOptions: NavBarOption[] = [
    { title: "Home", route: "/movies" },
    { title: "Favorites", route: "/favorites" },
  ]

  return (
    <div>
      <NavigationBar navOptions={navOptions}/>
      <Layout>
        
      </Layout>

    </div>
  );
};

export default MoviesIndex;
