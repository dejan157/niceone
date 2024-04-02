var myMenu = [
    { 
      page: "Home", 
      link: "index.html"
    },
    { 
      page: "About", 
      link: "about.html" 
    },
    { 
      page: "Products", 
      link: "product.html" 
    },
    { 
      page: "Contact", 
      link: "#contact" 
    },
    { 
      page: "Author", 
      link: "author.html" 
    },
    { 
      page: "Login", 
      link: "login" 
    }
  ];
  
  function Menu(){
    var m=document.getElementById("navbarsExample04");
    for(let i=0; i<myMenu.length; i++){
      m.innerHTML+=
      `
      <li class="nav-item">
        <a class="nav-link" href="${myMenu[i]["link"]}">${myMenu[i]["page"]}</a>
      </li>
        `
    }
  }
    
  Menu();