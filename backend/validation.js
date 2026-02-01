 const zod=require("zod");
 app.use(zod.json());

 const createTodo=zod.objects({
    title:zod.string(),
    description:zod.string()
 })

 const updateTodo=zod.objects({
    id:zod.string(),
 })