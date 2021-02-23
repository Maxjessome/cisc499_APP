import "reflect-metadata";
import {createConnection} from "typeorm";
import { Tenant } from "./entity/Tenant";

createConnection().then(async connection => {

    console.log("Inserting a new tenant into the database...");
    const tenant = new Tenant();
    tenant.First_Name = "Max";
    tenant.Last_Name = "Jessome";
    tenant.Age = 21;
    tenant.Username = "maxPEJK";
    tenant.Password = "PEJK"
    await connection.manager.save(tenant);
    console.log(`Saved a new user with id: ${tenant.Tenant_ID}`);

    console.log("Loading users from the database...");
    const tenants = await connection.manager.find(Tenant);
    console.log("Loaded users: ", tenants);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
