var http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const login = require("./routerComponent/login");
const signup = require("./routerComponent/signup");
const home = require("./routerComponent/home");
const addNewItem = require("./routerComponent/addNewItem");
const fixMaxTransferWeight = require("./routerComponent/fixMaxTransferWeight");
const insertMaxTransferWeight = require("./routerComponent/insertMaxTransferWeight");
const buyItem = require("./routerComponent/buyItem");
const buyItemUpdate = require("./routerComponent/buyItemUpdate");
const seeOrders = require("./routerComponent/seeOrders");
const manageOrdersCompany = require("./routerComponent/manageOrdersCompany");
const manageOrdersStore=require("./routerComponent/manageOrdersStore");
const manageUpdateStatus = require("./routerComponent/manageUpdateStatus");
const seeRailway = require("./routerComponent/seeRailway");
const addRailway = require("./routerComponent/addRailway");
const seeDrivers = require("./routerComponent/seeDrivers");
const manageDrives = require("./routerComponent/manageDrives");
const manageDrivesUpdate = require("./routerComponent/manageDriveUpdate");
const manageOrdersDriver=require("./routerComponent/manageOrdersDriver");
const seeStoreRoutes = require("./routerComponent/seeStoreRoutes");
const filterRoute = require("./routerComponent/filter/filterRoute");
const seeStoreMainDriver = require("./routerComponent/seeStoreMainDrivers");
const assignMainDriver = require("./routerComponent/assignMainDriver");
const seeStoreAssDriver = require("./routerComponent/seeStoreAssDriver");
const assignAssDriver = require("./routerComponent/assignAssDriver");
const updateConDrivOldDriver = require ("./routerComponent/updateConDrivOldDriver");
const reportShowQuarterlySales = require("./routerComponent/reports/showQuarterlySales");
const reportShowTownOrders= require("./routerComponent/reports/showTownOrders");
const reportShowRouteOrders =require("./routerComponent/reports/showRouteOrders");
const reportShowTopFiveItems = require("./routerComponent/reports/showTopFiveItems");

server = http.createServer ((req, res)=> {
  res.setHeader('Content-Type', 'text/plain');
})

// Set up body parsing middleware
app.use(express.json());

app.use("/login", login);
app.use("/signup", signup);
app.use("/home/items", home);
app.use("/home/addNewItem", addNewItem);
app.use("/home/fixMaxTransferWeight", fixMaxTransferWeight);
app.use("/home/insertMaxTransferWeight",insertMaxTransferWeight);
app.use("/home/items/buyItem", buyItem);
app.use("/home/items/buyItem/buyItemUpdate", buyItemUpdate);
app.use("/home/seeOrders", seeOrders);
app.use("/home/manageOrdersCompany", manageOrdersCompany);
app.use("/home/manageOrdersStore", manageOrdersStore);
app.use("/home/manageUpdateStatus", manageUpdateStatus);
app.use("/home/seeRailway", seeRailway);
app.use("/home/addRailway", addRailway);
app.use("/home/seeDrivers", seeDrivers);
app.use("/home/manageDrives", manageDrives);
app.use("/home/manageDrivesUpdate", manageDrivesUpdate);
app.use("/home/manageOrdersDriver", manageOrdersDriver);
app.use("/home/seeStoreRoutes", seeStoreRoutes);
app.use("/home/filterRoute", filterRoute);
app.use("/home/seeStoreMainDriver",seeStoreMainDriver);
app.use("/home/assignMainDriver", assignMainDriver);
app.use("/home/seeStoreAssDriver",seeStoreAssDriver);
app.use("/home/assignAssDriver", assignAssDriver);
app.use("/home/updateOldDriver", updateConDrivOldDriver);
app.use("/home/reports/showQuarterlySales", reportShowQuarterlySales);
app.use("/home/reports/showTownOrders", reportShowTownOrders);
app.use("/home/reports/showRouteOrders", reportShowRouteOrders);
app.use("/home/reports/ShowTopFiveItems", reportShowTopFiveItems);

app.listen(4000, () => {
    console.log("Listen port 4000");
  });