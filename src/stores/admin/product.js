import axios from "axios";
import { defineStore } from "pinia";

export const useProductStorePinia = defineStore("productStorePinia", {
  state: () => ({
    productInfo: {
      IDProduct: 0,
      NameProduct: "",
      IDBrand: null,
      Description: "",
      Stock: 0,
      Mass: 0,
      UnitsOfMass: "gam",
      Units: "",
      ApplyTaxes: 0,
      StatusSale: 0,
      IDTag: null,
      IDType: null,
      ListPrice: 0,
      Images: [],
    },
  }),
  actions: {
    async createNewProduct() {
      console.log(this.productInfo);
      await axios
        .post("/product/create", this.productInfo)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async getAPIProductInfo(IDProduct) {
      useProductStorePinia().$reset;
      this.productInfo.IDProduct = IDProduct;
      await axios
        .get("/product/show/" + IDProduct)
        .then((response) => {
          this.productInfo = response.data;
          console.log(response.data)
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updateProduct() {
      await axios
        .post("/product/update", this.productInfo)
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
