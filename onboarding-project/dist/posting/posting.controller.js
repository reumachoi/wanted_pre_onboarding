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
const company_service_1 = require("../company/company.service");
const posting_create_dto_1 = require("./dto/posting.create.dto");
const posting_update_dto_1 = require("./dto/posting.update.dto");
const posting_entity_1 = require("./posting.entity");
const posting_service_1 = require("./posting.service");
let PostingController = class PostingController {
    constructor(postingService, companyService) {
        this.postingService = postingService;
        this.companyService = companyService;
    }
    async createPost(postingCreateDto) {
        const company = await this.companyService.getOneCompany(postingCreateDto.companyId);
        const posting = new posting_entity_1.Posting();
        posting.companyId = company.companyId;
        posting.companyName = company.companyName;
        posting.country = company.country;
        posting.area = company.area;
        posting.position = postingCreateDto.position;
        posting.compensation = postingCreateDto.compensation;
        posting.content = postingCreateDto.content;
        posting.stack = postingCreateDto.stack;
        const result = await this.postingService.createPost(posting);
        return result;
    }
    async getListPost() {
        const result = await this.postingService.getAllPosts();
        return result;
    }
    async getSearchCompany(keyword) {
        const result = await this.postingService.getSearchCompany(keyword);
        return result;
    }
    async updatePost(postingId, postingUpdateDto) {
        const result = await this.postingService.updatePost(+postingId, postingUpdateDto);
        return result;
    }
    async deletePost(postingId) {
        const result = await this.postingService.deletePost(postingId);
        return result;
    }
    async getPostingDetail(id) {
        const result = await this.postingService.getPostingDetail(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posting_create_dto_1.PostingCreateDto]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "getListPost", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)('company')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "getSearchCompany", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, posting_update_dto_1.PostingUpdateDto]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Get)('/detail'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostingController.prototype, "getPostingDetail", null);
PostingController = __decorate([
    (0, common_1.Controller)('posting'),
    __metadata("design:paramtypes", [posting_service_1.PostingService,
        company_service_1.CompanyService])
], PostingController);
exports.PostingController = PostingController;
//# sourceMappingURL=posting.controller.js.map