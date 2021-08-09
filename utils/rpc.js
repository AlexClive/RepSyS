const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
module.exports = {
    Graph: async (obj) => {
        let rpcDate = new Promise((res, rej) => {
            let PROTO_PATH = obj["PROTO_PATH"];
            let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            });
            let methodGrpc = null;
            if (obj["itemName"] != "") {
                methodGrpc = grpc.loadPackageDefinition(packageDefinition)[obj['productName']][obj['itemName']][obj['middleWord']][obj['methodName']];
            } else {
                methodGrpc = grpc.loadPackageDefinition(packageDefinition)[obj['productName']][obj['middleWord']][obj['methodName']];
            }

            let client = new methodGrpc(obj["Grpc_service"], grpc.credentials.createInsecure());
            client[obj["method"]](obj["data"], (err, response) => {
                // 返回数据
                if (err) console.log(err);
                res(response);
                rej(response);
            });
        }, err => {
            console.log(err);
        });
        return rpcDate;
    }
};
