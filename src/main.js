import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";
import MegaMenu from "primevue/megamenu";
import router from "./router";
import Badge from "primevue/badge";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import Rating from "primevue/rating";
import ProgressBar from "primevue/progressbar";
import BadgeDirective from "primevue/badgedirective";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Tree from "primevue/tree";
import Divider from "primevue/divider";
import AutoComplete from "primevue/autocomplete";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import ScrollPanel from "primevue/scrollpanel";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';  


import "./scss/_theme.scss";
//import 'primevue/resources/themes/saga-green/theme.css';
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.component("InputNumber", InputNumber);
app.component("RadioButton", RadioButton);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.component("MultiSelect", MultiSelect);
app.component("Button", Button);
app.component("SelectButton", SelectButton);
app.component("InputText", InputText);
app.component("MegaMenu", MegaMenu);
app.component("Badge", Badge);
app.component("Sidebar", Sidebar);
app.component("Card", Card);
app.component("Rating", Rating);
app.component("ProgressBar", ProgressBar);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Divider", Divider);
app.component("Tree", Tree);
app.component("AutoComplete", AutoComplete);
app.component("InputSwitch", InputSwitch);
app.component("ScrollPanel", ScrollPanel);
app.component("DataTable", DataTable);
app.component("ColumnGroup", ColumnGroup);
app.component("Column", Column);
app.component("Row", Row);



app.directive("badge", BadgeDirective);

app.mount("#app");
