module.exports = {
    topic: async (ctx, next) => {
        let classify = [
            {
                title:"检索词",
                list:["全部","畸形瘤","肿瘤","卵黄囊瘤","生殖细胞瘤","畸胎瘤","肿瘤","卵黄囊瘤","生殖细胞瘤","瘤","肿瘤","卵黄囊瘤","生殖细胞瘤","瘤"]
            },
            {
                title:"类型",
                list:["全部","中文期刊","外文期刊","学位论文","会议论文"]
            },
            {
                title:"相关期刊",
                list:["全部","中国男科学杂志","中华男科学杂志","中国性科学","Reproduction"]
            }
            ,
            {
                title:"年份",
                list:["全部","近一年","近三年","近五年","近十年"]
            }
        ];
        await ctx.render("Topic",{
            classify
        })
    },
};
