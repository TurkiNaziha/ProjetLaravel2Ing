
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Listarticles from './components/articles/Listarticles';
import Insertarticle from './components/articles/InserArticle';
import Editarticle from './components/articles/Editarticle';
import Viewarticle from './components/articles/Viewarticle';

import Listcategories from './components/categories/Listcategorie';
import Insertcategorie from './components/categories/Insercategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';


import Listscategories from './components/scategories/ListScategorie';
import Insertscategorie from './components/scategories/InserScategorie';
import Editscategorie from './components/scategories/EditScategorie';
import Viewscategorie from './components/scategories/ViewScategorie';
import Menu from './components/Menu';
function App() {
 

  return (
    <>
      <Router>
        <Menu />
<Routes>
<Route path="/articles" element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" exact element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategorie/>}/>
<Route path="/scategories" element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
</Routes>
</Router>
    </>
  )
}

export default App
