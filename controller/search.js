module.exports = {
    search: async (ctx, next) => {
        let Introduction = {
            title: "生殖医学工程",
            context:'自古以来，生物体包括人类的种族延续，都是通过两性的结合，精卵在母体内受孕、发育来进行的。随着现代医学的发展，为治疗不育症、遗传病，实行优生优育和计划生育，改良人类素质，可以改变生物自然生殖的过程，不经两性性交，而且人工操作的方法来生育下一代，这种20世纪70年代发展起来的生殖医学新技术，称为生殖医学工程。'
        }; // 向模板 传递 参数
        await ctx.render("search",{
            Introduction
        })
    },
};
