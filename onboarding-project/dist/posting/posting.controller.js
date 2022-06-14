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
exports.PostingController = void 0;
const common_1 = require("@nestjs/common");
const posting_dto_1 = require("./posting.dto");
const posting_service_1 = require("./posting.service");
let PostingController = class PostingController {
    constructor(postingService) {
        this.postingService = postingService;
    }
    async create(postingDto) {
        const result = await this.postingService.createPost(postingDto);
        return result;
    }
    async getList() {
        const result = await this.postingService.getAllPosts();
        return result;
    }
    async getOne(postingId) {
        const result = await this.postingService.getOnePost({ id: postingId });
        return result;
    }
    async setOne(postingId, postingDto) {
        const result = await this.postingService.updatePost(postingId, postingDto);
        return result;
    }
    async removeOne(postingId) {
        const result = await this.postingService.deletePost(postingId);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posting_dto_1.PostingDto]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, posting_dto_1.PostingDto]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "setOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "removeOne", null);
PostingController = __decorate([
    (0, common_1.Controller)('posting'),
    __metadata("design:paramtypes", [posting_service_1.PostingService])
], PostingController);
exports.PostingController = PostingController;
//# sourceMappingURL=posting.controller.js.map