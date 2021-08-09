const rpc = require("./rpc");
const fs = require("fs");
const publicDate = require("../Configs/publicData");

module.exports={
    navigation: async (ctx,next)=>{
        if(ctx.url.indexOf(".") != -1) return await next();
        ctx.state.publicDate = publicDate;
        ctx.state.originalUrl = ctx.path;
        await next();
    },
    zkgrpc: async (ctx,next)=>{
        if(ctx.url.indexOf(".") != -1) return await next();
        let zkFile = JSON.parse((await fs.readFileSync('./Configs/zkrpcserviceDomain.json')).toString());
        let ZKService = {
            PROTO_PATH: "../ProtosFile/Client/ZKService.proto",
            Grpc_service: zkFile.zkrpcserviceDomain,
            methodName:'ZKService',
            productName:'wfmed',
            itemName: "",
            middleWord:'grpc',
            method: "GetDomain",
            data:{}
        };
        let GetDomain = await rpc.Graph(ZKService);
        ctx.state.GetDomain = GetDomain;
        await next();
    }
};
