class productManager {
  constructor() {
    this.products = [];
  }

  getProductById = (id) => {
    let pro = this.products.find((p) => p.id === id);
    if (pro) {
      return pro;
    } else {
      console.log("Error: Not Found");
    }
  };

  generarID = () => {
    return this.products.length + 1;
  };

  getProducts = () => {
    return this.products;
  };
  addProduct = (title, description, price, thumbnail, code, stock) => {


     if(typeof(title)!=="string" || title==="")
     { 
        console.log("El titulo debe ser string no vacío");
        return;
     }
     if(typeof(description)!== "string" || description==="")
     {
        console.log("La descripción debe ser string no nulo");
        return;
     }
     if(typeof(price)!=="number" || price <0)
     {
        console.log("El precio debe ser un número mayor o igual a cero");
        return;
     }
     if(typeof(code)!=="number" || code <0)
     {
        console.log("El código debe ser un número mayor o igual a cero");
        return;
     }
     if(typeof(stock)!=="number" || stock <0)
     {
        console.log("El stock debe ser un número mayor o igual a cero");
        return;
     }

       if (!this.products.find((p) => p.code === code)) {
      const product = {
        id: this.generarID(),
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      this.products.push(product);
    } else {
      console.log("El producto con code = " + code + " ya existe");
    }

    return;
  };
}

let pm = new productManager();
pm.addProduct("titulo", "desc", 2, "", 2, 2);
pm.addProduct("c", "f", 34, "tum", 2, 2); // no lo carga por duplicado y e informa de que ya existe
pm.addProduct("d", "h", 34, "tum", 5, 3);
console.log("producto 2 " + pm.getProductById(2)); //devuelve el objeto
pm.getProductById(5); // devuelve error

console.log(pm.getProducts()); //devuelve el array de productos

//requerimientos:
// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”
