function instanceofSample() {
    let prod = new Product(680, "HL Road Frame - Black, 58",
      "FR-R92B-58");
    let dt = new Date();
    let name = new String("Product Name");
    let value = "A simple string";

    console.log("prod instanceof Product = " + (prod instanceof Product).toString());
    console.log("prod instanceof Object = " + (prod instanceof Object).toString());
    console.log("dt instanceof Date = " + (dt instanceof Date).toString());
    console.log("dt instanceof Object = " + (dt instanceof Object).toString());
    console.log("name instanceof String = " + (name instanceof String).toString());
    console.log("name instanceof Object = " + (name instanceof Object).toString());
    console.log("value instanceof String = " + (value instanceof String).toString());
    console.log("value instanceof Object = " + (value instanceof Object).toString());
  }

  function Product(id, name, number) {
    this.productID = id;
    this.name = name;
    this.productNumber = number;
    this.color = "Black";
    this.standardCost = 10;
    this.listPrice = 30;
  }
  instanceofSample();