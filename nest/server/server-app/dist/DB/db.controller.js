"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./db.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let DbController = class DbController {
    constructor(dbservice) {
        this.dbservice = dbservice;
    }
    async signUser(req, res) {
        const { username, password } = await req.body;
        const found = await (await this.dbservice.find(username)).toJSON();
        found ? jwt.sign(found, "secret", { expiresIn: '60m' }, (err, token) => {
            if (err)
                throw err;
            res.status(200).json({ token: token, message: "SIGNED IN" });
        })
            : res.send("USERNAME NOT FOUND");
    }
    async createUser(req, res) {
        const candidate = await this.dbservice.find(req.body.username);
        if (!candidate) {
            if (req.body.password.length >= 8) {
                const created = await this.dbservice.create(req.body.username, bcrypt.hash(req.body.password, 10));
                await created.save();
                res.status(200).send("CREATED");
            }
            else {
                res.send("PASSWORD MUST CONTAIN AT LEAST 8 CHARACTERS");
            }
        }
        else {
            res.send("USERNAME ALREADY EXISTS");
        }
    }
};
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "signUser", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DbController.prototype, "createUser", null);
DbController = __decorate([
    (0, common_1.Controller)('db'),
    __metadata("design:paramtypes", [db_service_1.DbService])
], DbController);
exports.DbController = DbController;
//# sourceMappingURL=db.controller.js.map