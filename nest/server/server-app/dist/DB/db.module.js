"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const db_service_1 = require("./db.service");
const schema_model_1 = require("./schema.model");
const db_controller_1 = require("./db.controller");
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://root:root@cluster0.ns55i.mongodb.net/test"),
            mongoose_1.MongooseModule.forFeature([{ name: "schema", schema: schema_model_1.newSchema }])
        ],
        controllers: [db_controller_1.DbController],
        providers: [db_service_1.DbService]
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map