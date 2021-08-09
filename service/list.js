const rpc = require("../utils/rpc");
module.exports = {
    list: async (ctx) => {
        let filter = [
            {
                title: "资源类型",
                list: [{
                    title: "中文期刊",
                    count: 4524552
                }, {
                    title: "学位期刊",
                    count: 4524552
                }, {
                    title: "会议期刊",
                    count: 4524552
                }, {
                    title: "外文期刊",
                    count: 4524552
                }]
            }, {
                title: "出版时间",
                list: [{
                    title: "近一年",
                    count: 4524552
                }, {
                    title: "近三年",
                    count: 4524552
                }, {
                    title: "近五年",
                    count: 4524552
                }, {
                    title: "近十年",
                    count: 4524552
                }]
            }, {
                title: "主题类型",
                list: [{
                    title: "升值临床",
                    count: 4524552
                }, {
                    title: "升值伦理",
                    count: 4524552
                }, {
                    title: "生殖胚胎",
                    count: 4524552
                }, {
                    title: "生殖男科",
                    count: 4524552
                }]
            }];
        let obj = {
            PROTO_PATH: "../ProtosFile/Client/greet.proto",
            Grpc_service: "0.0.0.0:5000",
           // Grpc_service: "breed.service:90",
            methodName:'Greeter',
            productName:'WFMed',
            itemName:'Breed',
            middleWord:'GRPC',
            method: "SayHello",
            data:{name: JSON.stringify(filter)}
        };
        let data = await rpc.Graph(obj);


        return filter
    }
};
